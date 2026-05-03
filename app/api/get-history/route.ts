/**
 * API Route: /api/get-history
 * 
 * This API endpoint is used to retrieve a user's previous gift search history from the database.
 * It fetches the saved search records associated with the current user.
 */

import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db/mongodb";
import Search from "@/lib/models/Search";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId") || "guest"; // Default to guest or require auth

    await connectToDatabase();

    const history = await Search.find({ userId })
      .sort({ createdAt: -1 })
      .limit(10); // get last 10 searches

    return NextResponse.json({ history });
  } catch (error: any) {
    console.error("[GET_HISTORY_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to fetch history" },
      { status: 500 }
    );
  }
}
