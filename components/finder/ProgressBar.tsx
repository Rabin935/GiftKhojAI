/**
 * Component: Progress Bar
 * 
 * A visual indicator component used within the multi-step gift finder.
 * It shows the user their current progress through the questionnaire steps.
 */

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function ProgressBar({ currentStep }: { currentStep: number }) {
  const steps = [
    { num: 1, label: "Occasion" },
    { num: 2, label: "Recipient" },
    { num: 3, label: "Details" },
    { num: 4, label: "Results" },
  ];

  return (
    <div className="w-full mb-8 px-2 md:px-8">
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1.5 bg-slate-100 rounded-full z-0"></div>
        <motion.div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full z-0 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: (((currentStep - 1) / (steps.length - 1)) * 100) + '%' }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        ></motion.div>
        
        {steps.map((step) => {
          const isActive = step.num === currentStep;
          const isPast = step.num < currentStep;
          
          return (
            <div key={step.num} className="relative z-10 flex flex-col items-center gap-3">
              <motion.div 
                initial={false}
                animate={{
                  backgroundColor: isActive || isPast ? "#4f46e5" : "#ffffff",
                  borderColor: isActive || isPast ? "#4f46e5" : "#e2e8f0",
                  scale: isActive ? 1.2 : 1
                }}
                transition={{ duration: 0.3 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-4 ${
                  isActive ? "text-white shadow-lg shadow-indigo-500/40 ring-4 ring-indigo-100" : 
                  isPast ? "text-white" : "text-slate-400"
                }`}
              >
                {isPast ? <Check className="w-5 h-5" /> : step.num}
              </motion.div>
              <span className={`text-xs md:text-sm font-semibold absolute -bottom-8 whitespace-nowrap transition-colors duration-300 ${
                isActive ? "text-indigo-600" : isPast ? "text-slate-700" : "text-slate-400"
              }`}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
