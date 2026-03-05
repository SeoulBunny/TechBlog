import RecentPosts from "@/_components/home/RecentPosts";
import PostCardSkelton from "@/_components/skeletons/PostCardSkelton";
import ContainerLayouts from "@/_layouts/ContainerLayouts";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { LuArrowRight } from "react-icons/lu";

export default function Home() {
  return (
    <ContainerLayouts>
      <h1 className="text-3xl lg:text-5xl xl:text-7xl text-center text-gray-200 tracking-wide leading-snug lg:leading-tight">
        <span className="font-bold">Welcome to TechBlog</span> <br /> Discover
        Stories and Creative Ideas
      </h1>
      <div className="py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="relative ">
            <Image
              src="/images/about.png"
              alt="about-image"
              width={600}
              height={600}
              className="rounded-2xl border-white/10"
            />
            <div className="absolute -inset-4 bg-indigo-500/25 blur-3xl -z-10" />
          </div>
          <div className="max-w-xl">
            <span className="text-sm uppercase tracking-widest text-indigo-400">
              About Techblog
            </span>
            <h3 className="mt-3 text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-white">
              Simple ways to unleash your creative mind
            </h3>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              illo adipisci veniam assumenda dolorum quaerat eius, explicabo
              ipsam doloremque esse officia eligendi modi tenetur, cupiditate
              expedita eos aliquam aliquid sequi.
            </p>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-secondary-background border-white/10 text-gray-200 font-semibold hover:bg-white/15 transition-colors"
              >
                Learn More <LuArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<PostCardSkelton />}>
        <RecentPosts />
      </Suspense>
    </ContainerLayouts>
  );
}
