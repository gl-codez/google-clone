import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./components/Footer";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Google-clone",
  description: "Google clone created by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative min-h-screen">
        <SessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Footer />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
