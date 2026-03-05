import { getRecentPosts } from "@/_lib/posts";
import Image from "next/image";
import Link from "next/link";

const RecentPosts = async () => {
  const posts = await getRecentPosts();

  return (
    <div className="space-y-2 mb-10">
      <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
        Recent Posts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group rounded-xl overflow-hidden bg-[#0B0B0B] border border-white/10 transition-all duration-300 hover:translate-y-1 hover:border-white/25"
          >
            {post.coverImageURL && (
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  fill
                  src={post.coverImageURL}
                  alt={post.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            )}

            <div className="p-5 space-y-3">
              <time className="text-xs text-gray-400">
                {new Date(post.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </time>

              <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              <Link
                href={`/articles/${post.slug}`}
                className="inline-block text-sm font-medium text-indigo-400 hover:underline"
              >
                Read article
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
