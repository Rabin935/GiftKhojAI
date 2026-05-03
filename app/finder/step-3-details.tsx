/**
 * Component: Finder Step 3 (Additional Details)
 * 
 * This step gathers specific details like the user's budget and the recipient's interests.
 * These constraints are crucial for generating accurate and affordable gift suggestions.
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Loader2, Calendar, Search, MapPin, Wallet, Sparkle, Gift } from "lucide-react";
import { motion } from "framer-motion";

export function Step3Details({ flow }: { flow: any }) {
  const { searchState, updateState, submitSearch, loading } = flow;

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, x: 0,
      transition: { staggerChildren: 0.1 }
    },
    exit: { opacity: 0, x: -20 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col h-full"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3 tracking-tight">Make it personal</h2>
        <p className="text-slate-500 text-lg">A few more details to find the absolute best gift.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-8 max-w-4xl mx-auto w-full px-2">
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="space-y-2 group">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-500" /> Age
            </label>
            <Input 
              type="number" 
              placeholder="e.g. 25" 
              value={searchState.age}
              onChange={(e) => updateState({ age: e.target.value })}
              className="h-12 rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:border-indigo-500 focus:ring-indigo-500 shadow-sm transition-all"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2 group">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Search className="w-4 h-4 text-pink-500" /> Interests / Hobbies
            </label>
            <Input 
              placeholder="e.g. Photography, Coffee, Hiking..." 
              value={searchState.interests}
              onChange={(e) => updateState({ interests: e.target.value })}
              className="h-12 rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:border-pink-500 focus:ring-pink-500 shadow-sm transition-all"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2 group">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-500" /> City (Optional)
            </label>
            <Input 
              placeholder="e.g. Kathmandu, Pokhara..." 
              value={searchState.city}
              onChange={(e) => updateState({ city: e.target.value })}
              className="h-12 rounded-xl border-slate-200 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:ring-emerald-500 shadow-sm transition-all"
            />
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div variants={itemVariants} className="space-y-2 group">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Wallet className="w-4 h-4 text-blue-500" /> Budget (NPR)
            </label>
            <select 
              className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50 focus:bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm transition-all text-slate-700 font-medium"
              value={searchState.budget}
              onChange={(e) => updateState({ budget: e.target.value })}
            >
              <option value="">Select Budget</option>
              <option value="Low (<1000 NPR)">Low (&lt;1000 NPR)</option>
              <option value="Mid (1000–5000 NPR)">Mid (1000–5000 NPR)</option>
              <option value="High (5000–15000 NPR)">High (5000–15000 NPR)</option>
              <option value="Luxury (15000+ NPR)">Luxury (15000+ NPR)</option>
            </select>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2 group">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Sparkle className="w-4 h-4 text-amber-500" /> Personality
            </label>
            <select 
              className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50 focus:bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-sm transition-all text-slate-700 font-medium"
              value={searchState.personality}
              onChange={(e) => updateState({ personality: e.target.value })}
            >
              <option value="">Select Personality</option>
              <option value="Practical">Practical 🛠️</option>
              <option value="Creative">Creative 🎨</option>
              <option value="Funny">Funny 😂</option>
              <option value="Luxury">Luxury ✨</option>
            </select>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2 group">
            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Gift className="w-4 h-4 text-purple-500" /> Gift Type
            </label>
            <select 
              className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50 focus:bg-white px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 shadow-sm transition-all text-slate-700 font-medium"
              value={searchState.giftType}
              onChange={(e) => updateState({ giftType: e.target.value })}
            >
              <option value="">Select Type</option>
              <option value="Physical">Physical 📦</option>
              <option value="Handmade">Handmade 🧶</option>
              <option value="Experience">Experience 🎟️</option>
            </select>
          </motion.div>
        </div>
      </div>

      <motion.div variants={itemVariants} className="mt-auto flex justify-between pt-6 border-t border-slate-100">
        <Button 
          variant="ghost" 
          onClick={flow.prevStep} 
          disabled={loading}
          className="text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-full px-6"
        >
          Back
        </Button>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button 
            size="lg" 
            onClick={submitSearch} 
            disabled={loading}
            className="px-8 rounded-full h-12 shadow-lg shadow-indigo-500/30 transition-all bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-base"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Finding Magic...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Generate Gift Ideas
              </>
            )}
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
