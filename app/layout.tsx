import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Google",
  description: "Google clone created by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>
            {children}
            <Footer />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
