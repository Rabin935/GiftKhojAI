/**
 * Utility: General Helpers
 * 
 * Contains common utility functions used across the codebase.
 * For instance, the 'cn' function for merging Tailwind CSS classes efficiently.
 */

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
