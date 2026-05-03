/**
 * Utility: E-commerce Link Builder
 * 
 * Helper functions to generate dynamic search or affiliate links for specific gift items
 * on popular local e-commerce platforms (like Daraz, Sasto Doko, etc.).
 */

export function getDarazLink(keyword: string): string {
  return `https://www.daraz.com.np/catalog/?q=${encodeURIComponent(keyword)}`;
}

export function getKinaunLink(keyword: string): string {
  return `https://kinaun.com/search?q=${encodeURIComponent(keyword)}`;
}

export function getSastoDokoLink(keyword: string): string {
  return `https://sastodoko.com/search?q=${encodeURIComponent(keyword)}`;
}
