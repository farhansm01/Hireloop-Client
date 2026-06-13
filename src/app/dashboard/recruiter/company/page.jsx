"use client";

import { useState } from "react";
import { House } from "@gravity-ui/icons";
import RegisterCompanyModal from "@/components/Dashboard/RegisterCompanyModal";

export default function MyCompanyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [company, setCompany] = useState(null); // null = not registered yet

  const handleRegister = (data) => {
    console.log("Company registration data:", data);
    setCompany(data); // placeholder — replace with API call
    setIsModalOpen(false);
  };

  // ── Empty State ──
  if (!company) {
    return (
      <div className="min-h-[70vh] pt-16 flex flex-col items-center justify-center text-center px-4">

        {/* Illustration */}
        <div className="relative mb-8">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-[#161616] border border-[#2a2a2a] flex items-center justify-center">
            <House width={48} height={48} className="text-gray-600" />
          </div>
          <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black">
              <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
          Company not registered yet
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-md mb-8">
          Set up your business profile to start posting high-performance job
          listings and manage your talent loop.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 bg-white hover:bg-gray-100 text-black font-semibold text-sm h-11 px-6 rounded-xl transition-all"
          >
            Register your company
          </button>
          <button className="flex-1 border border-[#2a2a2a] hover:border-[#3a3a3a] hover:bg-[#1f1f1f] bg-[#0f0f0f] text-gray-300 font-medium text-sm h-11 px-6 rounded-xl transition-all">
            View FAQ
          </button>
        </div>

        <p className="text-gray-600 text-xs mt-8">
          Need specialized assistance?{" "}
          <span className="text-gray-400 underline cursor-pointer">
            Contact our enterprise support team.
          </span>
        </p>

        <RegisterCompanyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleRegister}
        />
      </div>
    );
  }

  // ── Registered State (placeholder, build out later) ──
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-4xl mx-auto">
      <h1 className="text-white text-2xl font-bold mb-4">My Company</h1>
      <pre className="text-gray-400 text-sm bg-[#161616] p-4 rounded-xl border border-[#2a2a2a]">
        {JSON.stringify(company, null, 2)}
      </pre>
    </div>
  );
}