import BlogView from "@/_components/blogPage/BlogView";
import PostViewSkeleton from "@/_components/skeletons/PostViewSkeleton";
import { getPostBySlug } from "@/server-actions/getPosts";
import { Suspense } from "react";

const ViewPostModal = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const postPromise = getPostBySlug(slug);
  return (
    <Suspense fallback={<PostViewSkeleton />}>
      <BlogView postPromise={postPromise} />
    </Suspense>
  );
};

export default ViewPostModal;
