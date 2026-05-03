/**
 * API Route: /api/generate-gifts
 * 
 * This file defines the backend API endpoint for generating personalized gift recommendations.
 * It receives user inputs (occasion, recipient details, budget, etc.), calls the AI model 
 * (via lib/ai/generateGifts), and returns the suggested gifts.
 */

import { NextResponse } from "next/server";
import { generateGiftsFromAI } from "@/lib/ai/generateGifts";
import { SearchState } from "@/types/gift";

export async function POST(req: Request) {
  try {
    const body: SearchState = await req.json();

    // In a real app, you might save this search to MongoDB here before/after generating
    // await saveSearchToDb(body);

    const result = await generateGiftsFromAI(body);

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("[GENERATE_GIFTS_ERROR]", error);
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    );
  }
}
