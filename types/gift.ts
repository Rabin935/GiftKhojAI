export interface Gift {
  id: string;
  name: string;
  description: string;
  price_range: string;
  search_keywords: string;
  tags: string[];
}

export interface SearchState {
  occasion: string;
  customOccasion?: string;
  recipient: string;
  customRecipient?: string;
  age: string;
  interests: string;
  personality: string;
  giftType: string;
  budget: string;
  city: string;
}
