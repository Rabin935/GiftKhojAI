/**
 * Component: Finder Step 1 (Occasion)
 * 
 * This component renders the first step of the gift finder flow.
 * It allows the user to select the occasion for the gift (e.g., Birthday, Anniversary).
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/utils";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const occasions = [
  { id: "birthday", label: "Birthday 🎂", img: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=500&q=80" },
  { id: "dashain", label: "Dashain 🏵️", img: "https://images.unsplash.com/photo-1603541571597-25e1a1795c65?w=500&q=80" },
  { id: "tihar", label: "Tihar 🪔", img: "https://images.unsplash.com/photo-1605333066345-420cd15ce2eb?w=500&q=80" },
  { id: "wedding", label: "Wedding 💍", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80" },
  { id: "anniversary", label: "Anniversary ❤️", img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&q=80" },
  { id: "corporate", label: "Corporate 💼", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&q=80" },
  { id: "other", label: "Other ✨", img: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=500&q=80" },
];

export function Step1Occasion({ flow }: { flow: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3 tracking-tight">What is the occasion?</h2>
        <p className="text-slate-500 text-lg">Select an event to help us find the perfect match.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {occasions.map((occ, idx) => {
          const isSelected = flow.searchState.occasion === occ.id;
          return (
            <motion.button
              key={occ.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                flow.updateState({ occasion: occ.id });
                if (occ.id !== "other") {
                  setTimeout(() => flow.nextStep(), 400);
                }
              }}
              className={cn(
                "group relative overflow-hidden rounded-2xl aspect-square border-[3px] text-left transition-all duration-300 shadow-sm",
                isSelected 
                  ? "border-indigo-500 shadow-indigo-200 shadow-xl ring-4 ring-indigo-50" 
                  : "border-transparent hover:border-indigo-200 hover:shadow-lg"
              )}
            >
              <img src={occ.img} alt={occ.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className={cn(
                "absolute inset-0 transition-all duration-300",
                isSelected ? "bg-indigo-900/40" : "bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90"
              )} />
              
              {isSelected && (
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute top-3 right-3 bg-white text-indigo-600 rounded-full shadow-lg"
                >
                  <CheckCircle2 className="w-6 h-6 fill-indigo-100" />
                </motion.div>
              )}

              <span className="absolute bottom-4 left-4 text-white font-bold text-lg md:text-xl flex flex-col">
                <span className="drop-shadow-lg">{occ.label}</span>
              </span>
            </motion.button>
          );
        })}
      </div>

      {flow.searchState.occasion === "other" && (
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="mb-8 max-w-md mx-auto w-full relative"
        >
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="text-slate-400">✨</span>
          </div>
          <Input 
            placeholder="Please specify the occasion..." 
            value={flow.searchState.customOccasion || ""}
            onChange={(e) => flow.updateState({ customOccasion: e.target.value })}
            className="pl-10 h-14 text-lg rounded-xl border-slate-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
            autoFocus
          />
        </motion.div>
      )}

      {flow.searchState.occasion === "other" && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-auto flex justify-end pt-4"
        >
          <Button 
            size="lg" 
            onClick={flow.nextStep} 
            disabled={!flow.searchState.customOccasion}
            className="w-full md:w-auto px-10 rounded-full h-12 text-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all"
          >
            Continue
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}
