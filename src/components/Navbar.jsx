// src/components/Navbar.js
"use client";
import { useState } from "react";
import { Bars, Xmark } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Browse Jobs", href: "/jobs" },
    { label: "Company", href: "/companies" },
    { label: "Pricing", href: "/pricing" },
  ];

  return (
    <header className="px-4 pt-3">
      <nav className="bg-[#1a1a1a] rounded-2xl px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="HireLoop"
            width={120}
            height={34}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-white text-[15px] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <div className="w-px h-6 bg-[#3a3a3a] mr-2" />
          <Link
            href="/sign-in"
            className="text-violet-400 hover:bg-violet-400/10 text-[15px] font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-[15px] font-medium px-5 py-2.5 rounded-xl transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <Xmark width={22} height={22} /> : <Bars width={22} height={22} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] rounded-2xl mt-2 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-400 hover:text-white text-[15px] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-full h-px bg-[#2a2a2a]" />
          <Link
            href="/sign-in"
            className="text-violet-400 text-[15px] font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-[15px] font-medium px-5 py-2.5 rounded-xl transition-colors text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}