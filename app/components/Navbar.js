"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-[#121212] opacity-90">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 py-2">
        <Link
          href="/"
          className="text-2xl md:text-5xl font-semibold text-white"
        >
          LOGO
        </Link>
        <div className="mobile-menu md:hidden">
          {!navOpen ? (
            <button
              onClick={() => setNavOpen(true)}
              className="flex items-center px-3 py-2 border border-slate-200 rounded text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavOpen(false)}
              className="flex items-center px-3 py-2 border border-slate-200 rounded text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink title={link.title} href={link.href} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}
