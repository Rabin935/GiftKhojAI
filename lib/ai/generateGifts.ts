/**
 * Utility: AI Gift Generator Integration
 * 
 * This module contains the core logic for communicating with the external AI API (e.g., Gemini).
 * It constructs the prompt based on user inputs, sends the request, and parses the AI's response
 * into a structured format of gift recommendations.
 */

import { GoogleGenAI } from "@google/genai";
import { SearchState } from "@/types/gift";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateGiftsFromAI(state: SearchState) {
  const occasionText = state.occasion === "other" ? state.customOccasion : state.occasion;
  const recipientText = state.recipient === "other" ? state.customRecipient : state.recipient;

  const cityText = state.city ? "- City: " + state.city : "";

  const promptParts = [
    "You are a Nepali gift expert. Suggest 5 personalized gift ideas based on the following details:",
    "- Occasion: " + occasionText,
    "- Recipient: " + recipientText
  ];

  if (state.age) promptParts.push("- Age: " + state.age);
  if (state.interests) promptParts.push("- Interests/Hobbies: " + state.interests);
  if (state.personality) promptParts.push("- Personality: " + state.personality);
  if (state.giftType) promptParts.push("- Preferred Gift Type: " + state.giftType);
  if (state.budget) promptParts.push("- Budget: " + state.budget);
  if (state.city) promptParts.push("- City: " + state.city);

  promptParts.push(
    "",
    "CRITICAL CONSTRAINTS:",
    "1. Recommend excellent, popular gift ideas that are widely available in Nepal.",
    "2. Use broader, reliable product categories (e.g., 'Men\\'s Digital Watch', 'Noise Cancelling Earbuds', 'Skincare Gift Set', 'Leather Wallet') instead of highly specific brand models.",
    "3. This is crucial because highly specific names often return 'no results' on Daraz. General names guarantee the user sees available options.",
    "4. Provide a realistic price_range in NPR.",
    "5. Make the 'search_keywords' broad and simple to guarantee search results (e.g., 'digital watch', 'skincare set', 'gaming mouse').",
    "",
    "Return ONLY a valid JSON object matching this exact schema:",
    "{",
    '  "gifts": [',
    "    {",
    '      "id": "unique-id-1",',
    '      "name": "Specific Brand & Product Name",',
    '      "description": "Why this specific product is a perfect fit...",',
    '      "price_range": "e.g., 2000 - 3000 NPR",',
    '      "search_keywords": "exact keyword to search on Daraz",',
    '      "tags": ["tag1", "tag2", "tag3"]',
    "    }",
    "  ]",
    "}"
  );

  const prompt = promptParts.join("\n");

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    const parsed = JSON.parse(text);
    return parsed;
  } catch (error) {
    console.error("AI Generation Error:", error);
    throw new Error("Failed to generate gift ideas. Please try again later.");
  }
}
