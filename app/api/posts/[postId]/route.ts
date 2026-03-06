import { auth } from "@/_lib/auth";
import prisma from "@/_lib/prisma";
import slugify from "slugify";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import {
  CloudinaryUploadResult,
  deleteFromCloudinary,
  uploadToCloudinary,
} from "@/services/cloudinary";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ postId: string }> },
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { postId } = await params;

    if (!postId) {
      return NextResponse.json(
        { error: "Valid ID is required" },
        { status: 400 },
      );
    }

    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (post.authorId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("FETCH_POST_ERROR:", error);

    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ postId: string }> },
) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { postId } = await params;

    const existingPost = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!existingPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    console.log("SESSION USER ID:", session.user.id);
    console.log("POST AUTHOR ID:", existingPost.authorId);

    if (existingPost.authorId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const formData = await req.formData();

    const title = formData.get("title") as string | null;
    const content = formData.get("content") as string | null;
    const excerpt = formData.get("excerpt") as string | null;
    const coverImage = formData.get("coverImage") as File | null;

    let slug = existingPost.slug;

    // Generate new slug if title changed
    if (title && title !== existingPost.title) {
      const baseSlug = slugify(title, {
        lower: true,
        strict: true,
        trim: true,
      });

      let uniqueSlug = baseSlug;
      let counter = 1;

      while (
        await prisma.post.findFirst({
          where: {
            slug: uniqueSlug,
            NOT: { id: postId },
          },
        })
      ) {
        uniqueSlug = `${baseSlug}-${counter}`;
        counter++;
      }

      slug = uniqueSlug;
    }

    // Handle image upload
    let imageData: CloudinaryUploadResult | null = null;

    if (coverImage) {
      imageData = await uploadToCloudinary(coverImage);

      if (imageData && existingPost.coverImagePublicId) {
        await deleteFromCloudinary(existingPost.coverImagePublicId);
      }
    }

    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: {
        title: title ?? existingPost.title,
        slug,
        content: content ?? existingPost.content,
        excerpt: excerpt ?? existingPost.excerpt,
        ...(imageData && {
          coverImageURL: imageData.secure_url,
          coverImagePublicId: imageData.public_id,
        }),
      },
    });

    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error) {
    console.error("UPDATE_POST_ERROR:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 },
    );
  }
}
