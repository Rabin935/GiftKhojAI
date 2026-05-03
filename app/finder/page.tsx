"use client";

/**
 * Component: Gift Finder Page
 * 
 * This is the main parent component for the interactive multi-step gift finder form.
 * It manages the overall layout and flow of the questionnaire, rendering the appropriate
 * step (occasion, recipient, details, or results) based on the current state.
 */

import { useGiftFlow } from "@/hooks/useGiftFlow";
import { ProgressBar } from "@/components/finder/ProgressBar";
import { Step1Occasion } from "./step-1-occasion";
import { Step2Recipient } from "./step-2-recipient";
import { Step3Details } from "./step-3-details";
import { Step4Results } from "./step-4-results";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function FinderPage() {
  const flow = useGiftFlow();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl min-h-[calc(100vh-160px)] flex flex-col">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 pt-4"
      >
        <ProgressBar currentStep={flow.step} />
      </motion.div>

      <div className="flex-1 w-full relative rounded-3xl p-[2px] bg-gradient-to-br from-indigo-100 via-white to-pink-100 shadow-2xl shadow-indigo-500/10 transition-all duration-500">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl rounded-3xl -z-10"></div>
        
        <div className="w-full h-full bg-white/80 backdrop-blur-xl rounded-[22px] p-6 md:p-10 relative overflow-hidden flex flex-col shadow-inner">
          {/* Back Button */}
          {flow.step > 1 && flow.step < 4 && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute top-6 left-6 z-10 hidden md:block"
            >
              <Button 
                variant="ghost" 
                className="text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full px-4 transition-all"
                onClick={flow.prevStep}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
            </motion.div>
          )}

          <div className="mt-8 md:mt-4 h-full relative flex-1">
            <AnimatePresence mode="wait">
              {flow.step === 1 && <Step1Occasion key="step1" flow={flow} />}
              {flow.step === 2 && <Step2Recipient key="step2" flow={flow} />}
              {flow.step === 3 && <Step3Details key="step3" flow={flow} />}
              {flow.step === 4 && <Step4Results key="step4" flow={flow} />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
