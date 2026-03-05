"use client";

import Link from "next/link";
import Logo from "./Logo";
import { LuMenu, LuNotebookPen, LuSearch, LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { useModalStore } from "@/store/UseModalStore";
import { authClient } from "@/_lib/auth-client";

export const NavLinks = [
  { url: "/", label: "Home" },
  { url: "/articles", label: "Articles" },
  { url: "/about", label: "About" },
];

const Navbar = () => {
  const { openSignIn, openSearch } = useModalStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut()
  }

  return (
    <nav className="h-18 fixed top-0 left-0 z-50 backdrop-blur-md backdrop-saturate-50 w-full">
      <div className="flex items-center justify-between h-full w-[90%] mx-auto">
        <Logo />

        <ul className="flex items-center gap-4 md:gap-8 text-gray-400 font-semibold">
          <li
            className="cursor-pointer flex items-center gap-1"
            onClick={openSearch}
          >
            <LuSearch size={25} />
            <span className="hidden md:block">Search</span>
          </li>
          {session && (
            <li>
              <Link
                href="/write"
                className="cursor-pointer flex items-center gap-1"
              >
                <LuNotebookPen size={20} />
                <span className="hidden md:block">Write</span>
              </Link>
            </li>
          )}
          {NavLinks.map((link) => (
            <li key={link.url} className="hidden md:block hover:text-gray-200">
              <Link href={link.url}>{link.label}</Link>
            </li>
          ))}
          {!isPending &&
            (session ? (
              <li
                onClick={handleLogout}
                className="bg-primary text-gray-200 px-3 lg:px-5 py-2 rounded-full cursor-pointer"
              >
                Logout
              </li>
            ) : (
              <li
                onClick={openSignIn}
                className="bg-primary text-gray-200 px-3 lg:px-5 py-2 rounded-full cursor-pointer"
              >
                Login
              </li>
            ))}
          <li
            className="cursor-pointer md:hidden z-80"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <LuX size={25} /> : <LuMenu size={25} />}
          </li>
        </ul>
      </div>
      <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
};

export default Navbar;
