import { deletePost, fetchPosts } from "@/services/post";
import { FetchPostsResponse } from "@/types/posts";
import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useInfinitePosts({ limit }: { limit: number }) {
  return useInfiniteQuery<FetchPostsResponse>({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) =>
      fetchPosts({
        pageParam: pageParam as string | null,
        limit,
      }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}

export function useDeletePost() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: (postId: string) => deletePost(postId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      router.replace("/articles");
    },
    onError: (error) => {
      console.error("DELETE_POST_ERROR:", error);
      alert("Failed to delete post");
    },
  });
}
