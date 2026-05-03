/**
 * Component: Finder Step 4 (Results)
 * 
 * This final step component displays the AI-generated gift recommendations to the user.
 * It maps through the suggested gifts and presents them in a visually appealing card layout,
 * often including links to purchase the items.
 */

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getDarazLink, getKinaunLink, getSastoDokoLink } from "@/lib/utils/buildLinks";
import { formatPrice } from "@/lib/utils/formatPrice";
import { Gift } from "@/types/gift";
import { ExternalLink, Star, RefreshCw, ShoppingCart, ShoppingBag, Sparkles, Loader2, Dices } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export function Step4Results({ flow }: { flow: any }) {
  const { results, error, submitSearch, loading } = flow;

  useEffect(() => {
    if (results && results.length > 0 && !loading && !error) {
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#6366f1', '#ec4899', '#8b5cf6']
        });
        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#6366f1', '#ec4899', '#8b5cf6']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [results, loading, error]);

  if (error) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
        <div className="text-red-500 mb-4 text-5xl">⚠️</div>
        <h3 className="text-3xl font-extrabold mb-2 text-slate-800">Oops, something went wrong!</h3>
        <p className="text-slate-500 mb-8 text-lg">{error}</p>
        <Button size="lg" onClick={submitSearch} disabled={loading} className="rounded-full px-8 bg-indigo-600 hover:bg-indigo-700">
          Try Again
        </Button>
      </motion.div>
    );
  }

  if (loading) {
    return (
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center py-24 text-center h-full"
      >
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="mb-8"
        >
          <div className="w-20 h-20 border-4 border-indigo-100 border-t-indigo-600 rounded-full" />
        </motion.div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Finding the perfect gifts... 🎁</h3>
        <p className="text-slate-500 animate-pulse">Our AI is analyzing thousands of options in Nepal.</p>
      </motion.div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="flex flex-col h-full"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">Top Recommendations 🎁</h2>
          <p className="text-slate-500 text-lg">Handpicked ideas tailored just for them.</p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            onClick={submitSearch} 
            disabled={loading} 
            className="flex gap-2 rounded-full px-6 shadow-md shadow-indigo-200 bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50"
          >
            <Dices className="w-5 h-5 text-indigo-500" />
            <span className="font-bold">Surprise Me</span>
          </Button>
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-8 pb-8"
      >
        <AnimatePresence>
          {results?.map((gift: Gift, index: number) => (
            <motion.div key={index} variants={cardVariants} whileHover={{ y: -8 }}>
              <Card className="flex flex-col h-full relative overflow-hidden group border-2 border-slate-100 hover:border-indigo-200 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 rounded-3xl bg-white/50 backdrop-blur-sm">
                {index === 0 && (
                  <motion.div 
                    initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                    className="absolute top-0 right-0 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5 z-10 shadow-md"
                  >
                    <Star className="w-3.5 h-3.5 fill-current" /> Best Match
                  </motion.div>
                )}
                
                <CardHeader className="pb-4 pt-6 px-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {gift.tags?.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full border border-indigo-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CardTitle className="text-2xl leading-tight text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {gift.name}
                  </CardTitle>
                  <CardDescription className="text-xl font-extrabold text-emerald-600 mt-2 flex items-center gap-2">
                    {formatPrice(gift.price_range)}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-slate-600 text-base leading-relaxed flex-1 px-6">
                  <p>{gift.description}</p>
                </CardContent>
                
                <CardFooter className="pt-6 pb-6 px-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3 bg-slate-50/50">
                  <a href={getDarazLink(gift.search_keywords)} target="_blank" rel="noreferrer" className="flex-1 w-full">
                    <Button className="w-full bg-gradient-to-r from-[#f85606] to-[#ff7b3a] hover:from-[#d04805] hover:to-[#e05a18] text-white flex gap-2 shadow-md shadow-orange-500/20 rounded-xl h-11 transition-all hover:shadow-lg">
                      <ShoppingCart className="w-4 h-4" />
                      Daraz
                    </Button>
                  </a>
                  <div className="flex gap-3 flex-1 w-full">
                    <a href={getKinaunLink(gift.search_keywords)} target="_blank" rel="noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full flex gap-2 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-indigo-600 rounded-xl h-11 transition-all">
                        <ExternalLink className="w-4 h-4" />
                        Kinaun
                      </Button>
                    </a>
                    <a href={getSastoDokoLink(gift.search_keywords)} target="_blank" rel="noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full flex gap-2 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-emerald-600 rounded-xl h-11 transition-all">
                        <ShoppingBag className="w-4 h-4" />
                        Sasto
                      </Button>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
