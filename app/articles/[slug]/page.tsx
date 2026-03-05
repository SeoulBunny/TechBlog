import Image from "next/image";
import Link from "next/link";
import { LuPen, LuTrash } from "react-icons/lu";

const ViewPostModal = () => {
  return (
    <article className="max-w-3xl mx-auto py-25 px-6">
      {/* article header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
          Building a blog with Next.js
        </h1>

        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>By Joe H</span>
          <span></span>
          <span>Sep 12, 2025</span>
        </div>
      </header>

      <div className="relative w-full h-55 sm:h-80 lg:h-105 mb-12">
        <Image
          src="/images/p1.png"
          alt="cover-image"
          className="object-cover rounded-2xl"
          fill
        />
      </div>

      {/* article contents */}
      <div className="max-w-none text-gray-400 leading-relaxed tracking-wide">
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus cumque
          tenetur dicta, quo vitae facilis inventore, aliquam incidunt dolore
          modi, unde minima adipisci reiciendis atque excepturi. Perspiciatis
          vitae adipisci eveniet?
        </p>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus cumque
          tenetur dicta, quo vitae facilis inventore, aliquam incidunt dolore
          modi, unde minima adipisci reiciendis atque excepturi. Perspiciatis
          vitae adipisci eveniet?
        </p>
        <p className="mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus cumque
          tenetur dicta, quo vitae facilis inventore, aliquam incidunt dolore
          modi, unde minima adipisci reiciendis atque excepturi. Perspiciatis
          vitae adipisci eveniet?
        </p>
      </div>

      <div className="border-t border-white/10 my-16" />

      <div className="flex justify-end items-center gap-2">
        <Link
          href="/#"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-indigo-400 border border-indigo-400/20 hover:border-indigo-400/40 hover:bg-indigo-400/10 transition cursor-pointer disabled:cursor-not-allowed"
        >
          <LuPen />
          Edit
        </Link>

        <button
          type="button"
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-red-400 border border-red-400/20 hover:border-red-400/40 hover:bg-red-400/10 transition cursor-pointer disabled:cursor-not-allowed"
        >
          <LuTrash />
          Delete
        </button>
      </div>

      <div className="mt-16">
        <Link
          href="/articles"
          className="text-indigo-400 hover:text-indigo-300"
        >
          ← Back to all articles
        </Link>
      </div>
    </article>
  );
};

export default ViewPostModal;
