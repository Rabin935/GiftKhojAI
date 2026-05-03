/**
 * Database Model: Search
 * 
 * Defines the Mongoose schema and model for a user's gift search.
 * This schema dictates how search inputs and generated gift results are structured and stored in MongoDB.
 */

import mongoose, { Schema, Document } from 'mongoose';

export interface ISearch extends Document {
  userId?: string;
  inputs: {
    occasion: string;
    recipient: string;
    age: string;
    interests: string;
    budget: string;
  };
  results: any[]; // JSON format of gifts
  createdAt: Date;
}

const SearchSchema: Schema = new Schema({
  userId: { type: String, required: false }, // Optional, for guest searches
  inputs: {
    occasion: { type: String },
    recipient: { type: String },
    age: { type: String },
    interests: { type: String },
    budget: { type: String },
  },
  results: { type: Array, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Search || mongoose.model<ISearch>('Search', SearchSchema);
