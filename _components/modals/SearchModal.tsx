"use client";

import { useModalStore } from "@/store/UseModalStore";
import Modal from "./Modal";

const results = [
  {
    id: 1,
    title: "Building a Blog with Next.js",
    slug: "/articles/medium-style-blog",
  },
  {
    id: 2,
    title: "Dark mode don light in Tailwind",
    slug: "/articles/dark-mode-tailwind",
  },
];

const SearchModal = () => {
  const { closeSearch, isSearchOpen } = useModalStore();
  return (
    <Modal onClose={closeSearch} isOpen={isSearchOpen}>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search articles"
          autoFocus
          className="w-full p-4 rounded-4xl bg-black/40 border border-white/10 text-white text-lg outline-none focus:border-indigo-500"
        />

        <div className="max-h-80 overflow-y-auto rounded-xl border-white/10 border divide-y divide-white/10">
          {results.map((result) => (
            <button
              key={result.id}
              className="w-full text-left px-4 py-3 text-gray-300 transition hover:bg-white/5 hover:text-white cursor-pointer"
            >
              {result.title}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
