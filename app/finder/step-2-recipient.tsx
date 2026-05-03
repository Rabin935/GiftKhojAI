/**
 * Component: Finder Step 2 (Recipient Details)
 * 
 * This component collects information about the gift recipient, including their age,
 * gender, and relationship to the user, to help the AI tailor its recommendations.
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/utils";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const recipients = [
  { id: "mom", label: "Mom 👩", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80" },
  { id: "dad", label: "Dad 👨", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80" },
  { id: "friend", label: "Friend 🧑", img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=300&q=80" },
  { id: "son", label: "Son 👦", img: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?w=300&q=80" },
  { id: "daughter", label: "Daughter 👧", img: "https://images.unsplash.com/photo-1517677129300-07b130802f46?w=300&q=80" },
  { id: "partner", label: "Partner 💑", img: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=300&q=80" },
  { id: "boss", label: "Boss 👔", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80" },
  { id: "other", label: "Other", img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=300&q=80" },
];

export function Step2Recipient({ flow }: { flow: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3 tracking-tight">Who are you shopping for?</h2>
        <p className="text-slate-500 text-lg">Select the recipient to personalize the ideas.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 px-2 md:px-4">
        {recipients.map((rec, idx) => {
          const isSelected = flow.searchState.recipient === rec.id;
          return (
            <motion.button
              key={rec.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                flow.updateState({ recipient: rec.id });
                if (rec.id !== "other") {
                  setTimeout(() => flow.nextStep(), 400);
                }
              }}
              className={cn(
                "group flex flex-col items-center gap-4 transition-all duration-300 relative",
                isSelected ? "opacity-100" : "opacity-80 hover:opacity-100"
              )}
            >
              <div className="relative">
                <div className={cn(
                  "w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 transition-all duration-500 shadow-md",
                  isSelected 
                    ? "border-pink-500 shadow-pink-300 shadow-xl ring-4 ring-pink-100 scale-105" 
                    : "border-transparent group-hover:shadow-lg group-hover:border-pink-200"
                )}>
                  <img src={rec.img} alt={rec.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                {isSelected && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-white rounded-full shadow-lg"
                  >
                    <CheckCircle2 className="w-7 h-7 text-pink-600 fill-pink-100" />
                  </motion.div>
                )}
              </div>
              
              <span className={cn(
                "font-medium transition-colors text-lg",
                isSelected ? "text-pink-600 font-bold" : "text-slate-600 group-hover:text-slate-900"
              )}>
                {rec.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      {flow.searchState.recipient === "other" && (
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="mb-8 max-w-md mx-auto w-full relative"
        >
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="text-slate-400">👤</span>
          </div>
          <Input 
            placeholder="Please specify (e.g. Teacher, Colleague)..." 
            value={flow.searchState.customRecipient || ""}
            onChange={(e) => flow.updateState({ customRecipient: e.target.value })}
            className="pl-10 h-14 text-lg rounded-xl border-slate-300 focus:border-pink-500 focus:ring-pink-500 shadow-sm"
            autoFocus
          />
        </motion.div>
      )}

      <div className="mt-auto flex justify-between pt-6 border-t border-slate-100">
        <Button 
          variant="ghost" 
          onClick={flow.prevStep}
          className="text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full px-6"
        >
          Back
        </Button>
        {flow.searchState.recipient === "other" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Button 
              size="lg" 
              onClick={flow.nextStep} 
              disabled={!flow.searchState.customRecipient}
              className="px-10 rounded-full h-12 text-lg bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-md hover:shadow-lg transition-all"
            >
              Continue
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
