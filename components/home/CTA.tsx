"use client";

/**
 * Component: Call To Action (CTA) Section
 * 
 * A UI section typically displayed on the home page encouraging users to engage
 * with the application, such as starting a new gift search.
 */

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with soft glow */}
      <div className="absolute inset-0 bg-slate-900 -z-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/40 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Stop scrolling. <br className="hidden md:block" />
            Start gifting smarter.
          </h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join thousands of Nepalis who have found the perfect gift effortlessly using AI.
          </p>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link href="/finder">
              <Button size="lg" className="h-16 px-10 text-xl font-bold rounded-full bg-white text-indigo-900 hover:bg-slate-100 shadow-2xl shadow-indigo-500/20">
                👉 Find Your Gift Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
