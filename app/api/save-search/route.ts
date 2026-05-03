/**
 * API Route: /api/save-search
 * 
 * This endpoint saves a completed gift search (user inputs and the AI-generated results)
 * into the database (MongoDB) so that users can view their past searches later.
 */

import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/db/mongodb";
import Search from "@/lib/models/Search";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await connectToDatabase();

    const newSearch = await Search.create({
      userId: body.userId || "guest",
      inputs: body.inputs,
      results: body.results,
    });

    return NextResponse.json({ success: true, id: newSearch._id });
  } catch (error: any) {
    console.error("[SAVE_SEARCH_ERROR]", error);
    return NextResponse.json(
      { error: "Failed to save search" },
      { status: 500 }
    );
  }
}
