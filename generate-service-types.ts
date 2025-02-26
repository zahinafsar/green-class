import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';

// Helper function to convert first character to uppercase
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

function generateTypesForFile(filePath: string) {
  // Read the source file
  const sourceText = fs.readFileSync(filePath, 'utf-8');
  const sourceFile = ts.createSourceFile(
    filePath,
    sourceText,
    ts.ScriptTarget.Latest,
    true
  );

  let imports = '';
  let output = '';

  // Function to visit nodes and extract function declarations
  function visit(node: ts.Node) {
    // Handle imports first
    if (ts.isImportDeclaration(node)) {
      const importText = sourceText.substring(node.pos, node.end).trim();
      // Include all external imports, not just prisma
      if (!importText.includes('@/')) {
        imports += importText + '\n';
      }
    }

    if (ts.isExportDeclaration(node)) {
      ts.forEachChild(node, visit);
    }
    
    if (ts.isFunctionDeclaration(node) || ts.isVariableDeclaration(node)) {
      let functionName = '';
      let isExported = false;

      // Handle function declarations
      if (ts.isFunctionDeclaration(node) && node.name) {
        functionName = node.name.text;
        isExported = node.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword) || false;
      }
      
      // Handle variable declarations with arrow functions
      if (ts.isVariableDeclaration(node) && node.name && ts.isIdentifier(node.name)) {
        functionName = node.name.text;
        const parent = node.parent?.parent as ts.VariableStatement;
        isExported = parent.modifiers?.some((m: ts.ModifierLike) => m.kind === ts.SyntaxKind.ExportKeyword) || false;
      }

      if (isExported && functionName) {
        const capitalizedName = capitalize(functionName);
        
        // Add import for the function
        imports += `import { ${functionName} } from '@/service/${path.basename(filePath, '.ts')}';\n`;

        // Get parameters type and return type from function signature
        let propsType = 'any';
        let returnType = 'any';

        if (ts.isFunctionDeclaration(node)) {
          if (node.parameters.length > 0) {
            const param = node.parameters[0];
            if (param.type) {
              const typeText = sourceText.substring(param.type.pos, param.type.end).trim();
              propsType = typeText || 'any';
            }
          }
          if (node.type) {
            const typeText = sourceText.substring(node.type.pos, node.type.end).trim();
            returnType = `Awaited<ReturnType<typeof ${functionName}>>`;
          }
        } else if (ts.isVariableDeclaration(node)) {
          if (node.type) {
            const typeText = sourceText.substring(node.type.pos, node.type.end).trim();
            if (typeText.includes('=>')) {
              const [params, returns] = typeText.split('=>').map(s => s.trim());
              propsType = params.replace(/^\(|\)$/g, '') || 'any';
              returnType = `Awaited<ReturnType<typeof ${functionName}>>`;
            }
          } else if (node.initializer && ts.isArrowFunction(node.initializer)) {
            // Handle arrow functions without explicit type annotations
            const arrowFn = node.initializer;
            if (arrowFn.parameters.length > 0) {
              const param = arrowFn.parameters[0];
              if (param.type) {
                const typeText = sourceText.substring(param.type.pos, param.type.end).trim();
                propsType = typeText || 'any';
              }
            }
            // Extract return type from arrow function
            returnType = `Awaited<ReturnType<typeof ${functionName}>>`;
          }
        }

        // Generate type declarations
        output += `// Types for ${functionName}\n`;
        output += `export namespace ${capitalizedName} {\n`;
        output += `  export type Props = ${propsType};\n`;
        output += `  export type Return = ${returnType};\n`;
        output += `}\n\n`;
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return { imports, output };
}

// Process all files in the service directory
const serviceDir = path.join(process.cwd(), 'service');
const outputFile = path.join(process.cwd(), 'types', 'api.ts');

// Ensure the types directory exists
if (!fs.existsSync(path.dirname(outputFile))) {
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
}

let allImports = '';
let allTypes = '// Auto-generated types for service functions\n\n';

fs.readdirSync(serviceDir).forEach((file) => {
  if (file.endsWith('.ts')) {
    const filePath = path.join(serviceDir, file);
    const { imports, output } = generateTypesForFile(filePath);
    allImports += imports;
    allTypes += output;
  }
});

// Write the generated types to a file
fs.writeFileSync(outputFile, allImports + '\n' + allTypes);
console.log('Types generated successfully in types/api.ts');