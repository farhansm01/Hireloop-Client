// src/components/dashboard/recruiter/RegisterCompanyModal.js
"use client";

import { Xmark, House, MapPin } from "@gravity-ui/icons";

const industries = ["Technology", "Fintech", "Healthcare", "E-Commerce", "Education", "Other"];
const employeeRanges = ["1-10 employees", "11-50 employees", "51-200 employees", "201-500 employees", "500+ employees"];

export default function RegisterCompanyModal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    onSubmit?.(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
      <div className="w-full max-w-2xl bg-[#161616] border border-[#2a2a2a] rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-start justify-between px-6 py-5 border-b border-[#2a2a2a]">
          <div>
            <h2 className="text-white text-xl font-bold">Register New Company</h2>
            <p className="text-gray-500 text-sm mt-1">
              Enter your business details to start hiring on HireLoop.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors p-1"
            aria-label="Close"
          >
            <Xmark width={20} height={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 gap-5">

            {/* Company Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-300">Company Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Acme Corp"
                className="w-full px-4 py-2 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] text-white placeholder:text-gray-600 text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors"
              />
            </div>

            {/* Industry / Category */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-300">Industry / Category</label>
              <select
                name="industry"
                required
                className="w-full px-4 py-2 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] text-white text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors"
              >
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            {/* Website URL */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-300">Website URL</label>
              <div className="flex items-center rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] overflow-hidden focus-within:border-violet-500 hover:border-violet-400 transition-colors">
                <span className="px-3 py-2 text-gray-500 text-sm bg-[#1a1a1a] border-r border-[#2a2a2a] shrink-0">
                  https://
                </span>
                <input
                  type="text"
                  name="website"
                  placeholder="www.company.com"
                  className="w-full px-3 py-2 bg-transparent text-white placeholder:text-gray-600 text-sm outline-none"
                />
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-300">Location</label>
              <div className="relative flex items-center">
                <span className="absolute left-3 pointer-events-none">
                  <MapPin width={16} height={16} className="text-gray-500" />
                </span>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="City, Country"
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] text-white placeholder:text-gray-600 text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors"
                />
              </div>
            </div>

            {/* Employee Count Range */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-300">Employee Count Range</label>
              <select
                name="employeeCount"
                required
                className="w-full px-4 py-2 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] text-white text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors"
              >
                {employeeRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            {/* Company Logo */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-300">Company Logo</label>
              <label
                htmlFor="logo-upload"
                className="flex items-center gap-3 px-3 py-2 rounded-xl border border-dashed border-[#3a3a3a] bg-[#0f0f0f] hover:border-violet-400 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1f1f1f] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
                    <path d="M12 16V4m0 0L8 8m4-4l4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 16v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-medium">Upload image</p>
                  <p className="text-gray-500 text-xs">PNG, JPG up to 5MB</p>
                </div>
                <input id="logo-upload" type="file" name="logo" accept="image/*" className="hidden" />
              </label>
            </div>

            {/* Brief Description */}
            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className="text-sm font-medium text-gray-300">Brief Description</label>
              <textarea
                name="description"
                rows={4}
                placeholder="Tell us about your company's mission and culture..."
                className="w-full px-4 py-3 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] text-white placeholder:text-gray-600 text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors resize-y"
              />
            </div>

          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row sm:justify-end gap-3 px-6 py-5 border-t border-[#2a2a2a]">
            <button
              type="button"
              onClick={onClose}
              className="border border-[#2a2a2a] hover:border-[#3a3a3a] hover:bg-[#1f1f1f] bg-[#0f0f0f] text-gray-300 font-medium text-sm h-11 px-6 rounded-xl transition-all order-2 sm:order-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-black font-semibold text-sm h-11 px-6 rounded-xl transition-all order-1 sm:order-2"
            >
              Register Company
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}