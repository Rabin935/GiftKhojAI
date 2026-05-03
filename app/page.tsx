/**
 * Component: Home Page
 * 
 * This is the landing page of the GiftKhojAI application.
 * It serves as the primary entry point, showcasing the app's features, how it works,
 * and providing calls-to-action (CTAs) to start the gift finder flow.
 */

import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
    </div>
  );
}
