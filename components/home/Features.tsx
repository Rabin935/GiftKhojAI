"use client";

/**
 * Component: Features Section
 * 
 * This component highlights the key features and benefits of the GiftKhojAI application
 * on the landing page, explaining why users should use the service.
 */

import { motion } from "framer-motion";
import { Brain, CalendarHeart, ShoppingBag, MapPin } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-6 h-6 text-indigo-600" />,
    title: "AI-Powered Suggestions",
    desc: "Our smart algorithm learns your preferences to find the most unique and fitting gifts.",
    color: "bg-indigo-100"
  },
  {
    icon: <CalendarHeart className="w-6 h-6 text-pink-600" />,
    title: "Personalized for Every Occasion",
    desc: "From birthdays to Dashain, we tailor recommendations specifically to the event.",
    color: "bg-pink-100"
  },
  {
    icon: <MapPin className="w-6 h-6 text-emerald-600" />,
    title: "Nepal-Focused",
    desc: "We only suggest items that are realistically available and shippable within Nepal.",
    color: "bg-emerald-100"
  },
  {
    icon: <ShoppingBag className="w-6 h-6 text-orange-600" />,
    title: "Direct Buy Links",
    desc: "Instantly shop the recommendations on Daraz, Kinaun, or Sasto Doko with one click.",
    color: "bg-orange-100"
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Why use GiftKhoj?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">We take the guesswork out of gifting so you can focus on celebrating.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-indigo-100/50 transition-all cursor-default group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feat.color} group-hover:scale-110 transition-transform`}>
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{feat.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

