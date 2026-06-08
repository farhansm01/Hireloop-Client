// src/components/home/BannerSection.js
"use client";
import { useState } from "react";
import { Magnifier, MapPin } from "@gravity-ui/icons";

const trending = ["Product Designer", "AI Engineering", "Dev-ops Engineer"];

export default function BannerSection() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section className="w-full flex flex-col items-center justify-center text-center px-4 pt-20 pb-16">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 border border-[#2a2a2a] rounded-full px-4 py-1.5 mb-7 bg-[#161616]">
        <span className="text-base">💼</span>
        <span className="text-white font-bold text-sm">50,000+</span>
        <span className="text-gray-500 text-[11px] tracking-widest font-mono">
          NEW JOBS THIS MONTH
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-white font-extrabold leading-tight mb-4 max-w-[680px] text-4xl sm:text-5xl md:text-6xl">
        Find Your Dream Job Today
      </h1>

      {/* Subtext */}
      <p className="text-gray-400 max-w-[500px] leading-relaxed mb-9 text-sm sm:text-base">
        HireLoop connects top talent with world-class companies. Browse thousands of
        curated opportunities and land your next role — faster.
      </p>

      {/* Search Bar */}
      <div className="flex items-center w-full max-w-[660px] bg-[#161616] border border-[#2a2a2a] rounded-xl overflow-hidden mb-5">

        {/* Keyword */}
        <div className="flex items-center gap-2.5 px-4 py-3.5 flex-1 border-r border-[#2a2a2a]">
          <Magnifier width={17} height={17} className="text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder="Job title, skill or company"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-gray-600"
          />
        </div>

        {/* Location */}
        <div className="flex items-center gap-2.5 px-4 py-3.5 flex-1">
          <MapPin width={17} height={17} className="text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder="Location or Remote"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-gray-600"
          />
        </div>

        {/* Search Button */}
        <button className="bg-[#7c3aed] hover:bg-[#6d28d9] flex items-center justify-center px-5 py-3.5 shrink-0 transition-colors">
          <Magnifier width={20} height={20} className="text-white" />
        </button>
      </div>

      {/* Trending */}
      <div className="flex items-center flex-wrap gap-2.5 justify-center">
        <span className="text-gray-500 text-[13px]">Trending Position</span>
        {trending.map((item) => (
          <button
            key={item}
            className="border border-[#2a2a2a] rounded-full px-4 py-1 bg-[#161616] text-gray-300 hover:border-violet-500 hover:text-white text-[13px] transition-colors"
          >
            {item}
          </button>
        ))}
      </div>

    </section>
  );
}