/**
 * Database Model: User
 * 
 * Defines the Mongoose schema and model for application users.
 * This manages user accounts, authentication details, and potentially references to their searches.
 */

import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  name: string;
  savedGifts: any[];
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String },
  savedGifts: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
