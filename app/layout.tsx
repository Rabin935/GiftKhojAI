/**
 * Component: Root Layout
 * 
 * This is the root layout component for the entire Next.js application.
 * It defines the foundational HTML structure, includes global styles, and wraps all pages
 * with common UI elements like the Navbar and Footer.
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GiftKhojAI🎁",
  description: "AI-powered personalized gift recommendations tailored for Nepal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50/50`}>
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
