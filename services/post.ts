import { FetchPostsParams, FetchPostsResponse } from "@/types/posts";
import axios from "axios";

export async function fetchPosts({
  pageParam,
  limit,
}: FetchPostsParams): Promise<FetchPostsResponse> {
  const res = await axios.get("api/posts", {
    params: {
      cursor: pageParam,
      limit,
    },
  });
  return res.data;
}
