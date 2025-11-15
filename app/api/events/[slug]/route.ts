import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Event } from "@/database";
import type { IEvent } from "@/database";

// Validate slugs: lowercase letters, numbers, and hyphens only (no leading/trailing hyphen)
const isValidSlug = (value: string): boolean => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);

type RouteParams = { params: Promise<{ slug?: string }> };

/**
 * GET /api/events/[slug]
 * Returns a single event by slug with robust validation and error handling.
 */
export async function GET(_req: NextRequest, context: RouteParams) {
  // Extract and normalize slug
  const params = await context.params;
  const rawSlug = params?.slug;
  if (!rawSlug || typeof rawSlug !== "string") {
    return NextResponse.json({ message: "'slug' route param is required" }, { status: 400 });
  }

  const slug = rawSlug.trim().toLowerCase();
  if (!isValidSlug(slug)) {
    return NextResponse.json(
      { message: "Invalid slug format. Use lowercase letters, numbers, and hyphens only." },
      { status: 400 }
    );
  }

  try {
    // Ensure DB connection (cached across invocations in serverless)
    await connectToDatabase();

    // Find event by slug
    const event: IEvent | null = await Event.findOne({ slug }).exec();

    if (!event) {
      return NextResponse.json({ message: "Event not found" }, { status: 404 });
    }

    // Return the event document; Mongoose handles toJSON for safe serialization
    return NextResponse.json({message: "Event Fetched Successfully", event}, { status: 200 });
  } catch  {
    // Avoid leaking internals in the response; log server-side if needed
    return NextResponse.json(
      { message: "Unexpected error while fetching event" },
      { status: 500 }
    );
  }
}