"use client";

/**
 * Component: How It Works Section
 * 
 * An informational component that breaks down the process of using the gift finder
 * into simple, understandable steps for new users.
 */

import { motion } from "framer-motion";
import { PartyPopper, UserCircle2, Settings2, Gift } from "lucide-react";

const steps = [
  { num: "01", icon: <PartyPopper />, title: "Choose Occasion 🎉", desc: "Select the event you're celebrating." },
  { num: "02", icon: <UserCircle2 />, title: "Select Recipient 👨‍👩‍👧", desc: "Tell us who the lucky person is." },
  { num: "03", icon: <Settings2 />, title: "Add Preferences 🧠", desc: "Share their hobbies, age, and your budget." },
  { num: "04", icon: <Gift />, title: "Get Ideas 🎁", desc: "Receive 5 perfectly tailored gift links." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Four simple steps to the perfect present.</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 mb-12 md:mb-0 px-4"
            >
              <div className="w-24 h-24 rounded-full bg-white shadow-xl shadow-indigo-100 flex items-center justify-center text-indigo-600 mb-6 border-4 border-slate-50 relative group hover:border-indigo-100 transition-colors">
                <span className="absolute -top-3 -right-2 bg-indigo-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-white">
                  {step.num}
                </span>
                <div className="w-10 h-10 [&>svg]:w-full [&>svg]:h-full group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
