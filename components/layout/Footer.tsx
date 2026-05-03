/**
 * Component: Global Footer
 * 
 * The standard footer displayed at the bottom of the application pages.
 * It typically contains copyright information, useful links, and social media icons.
 */

import Link from "next/link";
import { Gift, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t py-12 mt-auto">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Gift className="w-6 h-6 text-indigo-600" />
            <span className="text-xl font-bold text-slate-800">GiftKhojAI</span>
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            <Link href="/#features" className="hover:text-indigo-600 transition-colors">Features</Link>
            <Link href="/finder" className="hover:text-indigo-600 transition-colors">Find a Gift</Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} GiftKhojAI. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
