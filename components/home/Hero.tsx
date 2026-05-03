"use client";

/**
 * Component: Hero Section
 * 
 * The prominent, top-most section of the home page designed to grab the user's attention
 * immediately with a strong headline, engaging visuals, and a primary call-to-action.
 */

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Gift, Sparkles, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 inset-x-0 h-full w-full bg-gradient-to-b from-indigo-50/50 via-white to-white -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute top-32 -left-24 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Smarter Gifting in Nepal</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">Perfect Gift</span> <br/>
              in Seconds 🎁
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              AI-powered personalized gift recommendations tailored for Nepal. Stop stressing over what to buy—let our smart algorithm do the magic.
            </p>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link href="/finder">
                <Button size="lg" className="h-14 px-8 text-lg font-semibold rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 hover:from-indigo-700 hover:to-purple-600 shadow-xl shadow-indigo-200 border-0">
                  👉 Start Finding Gifts
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Illustration/Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 relative w-full max-w-md lg:max-w-none"
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-tr from-indigo-100 to-purple-50 border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Floating elements inside the hero card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <Gift className="w-5 h-5" />
                </div>
                <div>
                  <div className="h-2 w-16 bg-slate-200 rounded mb-2"></div>
                  <div className="h-2 w-10 bg-slate-200 rounded"></div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 left-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-800">Best Match!</div>
                  <div className="text-xs text-slate-500">Found 5 ideas</div>
                </div>
              </motion.div>

              {/* Center graphic */}
              <div className="w-48 h-48 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-20 absolute" />
              <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80" alt="Gifts" className="relative z-10 w-64 h-64 object-cover rounded-2xl shadow-lg border-4 border-white transform -rotate-6 hover:rotate-0 transition-transform duration-500" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
