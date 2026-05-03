/**
 * Custom Hook: useGiftFlow
 * 
 * A React hook that manages the complex state and transitions of the multi-step gift finder.
 * It stores user inputs from each step, handles validation, and manages navigation between steps.
 */

import { useState } from "react";
import { SearchState, Gift } from "@/types/gift";

export function useGiftFlow() {
  const [step, setStep] = useState(1);
  const [searchState, setSearchState] = useState<SearchState>({
    occasion: "",
    recipient: "",
    age: "",
    interests: "",
    personality: "",
    giftType: "",
    budget: "",
    city: "",
  });
  const [results, setResults] = useState<Gift[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nextStep = () => setStep((s) => Math.min(s + 1, 4));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));
  const goToStep = (s: number) => setStep(s);

  const updateState = (updates: Partial<SearchState>) => {
    setSearchState((prev) => ({ ...prev, ...updates }));
  };

  const submitSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/generate-gifts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(searchState),
      });

      if (!response.ok) {
        throw new Error("Failed to generate gifts");
      }

      const data = await response.json();
      setResults(data.gifts);
      nextStep(); // Move to results step (4)
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return {
    step,
    searchState,
    updateState,
    nextStep,
    prevStep,
    goToStep,
    submitSearch,
    results,
    loading,
    error,
  };
}
