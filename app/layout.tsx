import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { TanstackQueryProvider } from "@/hooks/query";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Green Class",
  description: "Green Class",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="pushalert"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                var g = d.createElement(t),
                s = d.getElementsByTagName(t)[0];
                g.src = "https://cdn.pushalert.co/integrate_7e890813047df61e7f0de4aa54888f3b.js";
                s.parentNode.insertBefore(g, s);
              }(document, "script"));
            `,
          }}
        />
        <TanstackQueryProvider>
          {children}
          <Toaster />
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
