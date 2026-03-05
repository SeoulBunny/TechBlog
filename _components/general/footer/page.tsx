"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-24 px-10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} TechBlog. All Rights Reserved
        </p>

        <div className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Articles
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
