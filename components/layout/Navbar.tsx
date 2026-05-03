"use client";

/**
 * Component: Global Navigation Bar
 * 
 * The top navigation header present across the application.
 * It provides branding, links to main sections, and user authentication controls.
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-md transition-all">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-tr from-indigo-600 to-purple-500 p-1.5 rounded-lg text-white group-hover:shadow-lg group-hover:scale-105 transition-all">
            <Gift className="w-5 h-5" />
          </div>
          <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-600">
            GiftKhojAI
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</Link>
          <Link href="/#how-it-works" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">How It Works</Link>
          <Link href="/finder">
            <Button className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-purple-600 text-white shadow-md hover:shadow-lg transition-all">
              Find Gift
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
