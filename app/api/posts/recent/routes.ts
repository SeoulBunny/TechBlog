import prisma from "@/_lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImageURL: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ posts }, {status: 200});
  } catch (error) {
    console.error("Fetch recent posts error:", error);

    return NextResponse.json(
      { error: "Failed to fetch recent posts" },
      { status: 500 },
    );
  }
}
