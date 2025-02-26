# Green Class

A modern web application built with Next.js 15, React 19, and TypeScript, featuring a robust backend powered by Prisma and PostgreSQL.

## Features

- 🚀 Built with Next.js 15 and React 19
- 💪 TypeScript for type safety
- 🎨 TailwindCSS for styling
- 🔒 Authentication system with bcryptjs
- 🗄️ PostgreSQL database with Prisma ORM
- 🐳 Docker support for development
- 🔄 Auto-generated service types

## Prerequisites

- Node.js (Latest LTS version recommended)
- Docker and Docker Compose
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd green-class
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
- Copy `.env.example` to `.env`
- Update the environment variables as needed

4. Start the database:
```bash
npm run db:up
# or
yarn db:up
```

5. Run database migrations:
```bash
npm run prisma:migrate
# or
yarn prisma:migrate
```

6. Start the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typegen` - Generate service types
- `npm run db:up` - Start database container
- `npm run db:down` - Stop database container
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:deploy` - Deploy database migrations
- `npm run prisma:reset` - Reset database
- `npm run prisma:studio` - Open Prisma Studio

## Project Structure

```
├── app/                # Next.js app directory
│   ├── api/           # API routes
│   ├── components/    # React components
│   └── page.tsx      # Main page component
├── lib/               # Utility functions and shared code
├── prisma/            # Database schema and migrations
├── service/           # Service layer
├── types/            # TypeScript type definitions
└── public/           # Static files
```

## Database Management

The project uses PostgreSQL with Prisma as the ORM. The database runs in a Docker container for development.

To manage the database:
1. Start the database: `npm run db:up`
2. Run migrations: `npm run prisma:migrate`
3. View/edit data: `npm run prisma:studio`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
