// src/app/(main)/dashboard/recruiter/jobs/new/page.js
"use client";

import { useState } from "react";
import { Form, TextField, Label, Input, FieldError, Button } from "@heroui/react";
import {
    Briefcase,
    MapPin,
    Calendar,
    CreditCard,
    House,
} from "@gravity-ui/icons";
import { createJob } from "@/lib/actions/jobs";
import { useRouter } from "next/navigation";


const jobTypes = ["Full-time", "Part-time", "Remote", "Contract", "Internship"];
const currencies = ["USD", "EUR", "GBP", "BDT"];

export default function NewJob() {
    const [isRemote, setIsRemote] = useState(false);

    const router = useRouter();

    // Auto-filled from recruiter's registered company (placeholder data)
    const company = {
        companyId: "company_123",
        name: "Acme Corp",
        industry: "Technology",
        status: "approved", // pending | approved | rejected
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = Object.fromEntries(new FormData(e.currentTarget));

        const payload = {
            ...formData,
            location: isRemote ? "Remote" : formData.location,
            companyId: company.companyId,
            companyName: company.name,
            industry: company.industry,
            postedAt: new Date().toISOString(),
            status: "active",
        };

        const result = await createJob(payload);
        e.target.reset();
        setIsRemote(false);
        router.push("/dashboard/recruiter/jobs");
    };

    // Gate: company must be approved before posting
    if (company.status !== "approved") {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-8 max-w-md">
                    <House width={32} height={32} className="text-gray-500 mx-auto mb-4" />
                    <h2 className="text-white text-xl font-bold mb-2">Company approval pending</h2>
                    <p className="text-gray-500 text-sm">
                        Your company registration is currently{" "}
                        <span className="text-amber-400 font-medium">{company.status}</span>.
                        You can post jobs once it&apos;s approved by an admin.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-4xl mx-auto">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-white text-2xl sm:text-3xl font-bold mb-1">Post a New Job</h1>
                <p className="text-gray-500 text-sm">
                    Fill in the details below to publish a new job opening on HireLoop.
                </p>
            </div>

            <Form className="flex flex-col gap-8" onSubmit={handleSubmit}>

                {/* ── Job Info Section ── */}
                <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-5 sm:p-6">
                    <h2 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
                        <Briefcase width={18} height={18} className="text-violet-400" />
                        Job Info
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                        {/* Job Title */}
                        <TextField
                            isRequired
                            name="title"
                            className="flex flex-col gap-1 sm:col-span-2"
                        >
                            <Label className="text-sm font-medium text-gray-300">Job Title</Label>
                            <Input
                                placeholder="e.g. Senior Frontend Developer"
                                className="w-full px-4 py-2 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] data-[focus=true]:bg-[#0f0f0f] text-white placeholder:text-gray-600 text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors"
                            />
                            <FieldError className="text-xs text-red-400 mt-0.5" />
                        </TextField>

                        {/* Job Category */}
                        <TextField isRequired name="category" className="flex flex-col gap-1">
                            <Label className="text-sm font-medium text-gray-300">Job Category</Label>
                            <Input
                                placeholder="e.g. Engineering, Design, Marketing"
                                className="w-full px-4 py-2 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] data-[focus=true]:bg-[#0f0f0f] text-white placeholder:text-gray-600 text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors"
                            />
                            <FieldError className="text-xs text-red-400 mt-0.5" />
                        </TextField>

                        {/* Job Type */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-300">Job Type</label>
                            <select
                                name="type"
                                required
                                className="w-full px-4 py-2 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] text-white text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors"
                            >
                                {jobTypes.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>

                        {/* Salary Min */}
                        <TextField name="salaryMin" className="flex flex-col gap-1">
                            <Label className="text-sm font-medium text-gray-300">Min Salary</Label>
                            <div className="relative flex items-center">
                                <span className="absolute left-3 pointer-events-none">
                                    <CreditCard width={16} height={16} className="text-gray-500" />
                                </span>
                                <Input
                                    type="number"
                                    placeholder="50000"
                                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] data-[focus=true]:bg-[#0f0f0f] text-white placeholder:text-gray-600 text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors"
                                />
                            </div>
                        </TextField>

                        {/* Salary Max + Currency */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-300">Max Salary</label>
                            <div className="flex gap-2">
                                <div className="relative flex items-center flex-1">
                                    <span className="absolute left-3 pointer-events-none">
                                        <CreditCard width={16} height={16} className="text-gray-500" />
                                    </span>
                                    <input
                                        type="number"
                                        name="salaryMax"
                                        placeholder="90000"
                                        className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] text-white placeholder:text-gray-600 text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors"
                                    />
                                </div>
                                <select
                                    name="currency"
                                    className="px-3 py-2 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] text-white text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors"
                                >
                                    {currencies.map((cur) => (
                                        <option key={cur} value={cur}>{cur}</option>
                                    ))}
                                </select>
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
                                    placeholder="City, Country"
                                    disabled={isRemote}
                                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] text-white placeholder:text-gray-600 text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors disabled:opacity-40"
                                />
                            </div>
                            <label className="flex items-center gap-2 mt-1 cursor-pointer select-none">
                                <input
                                    type="checkbox"
                                    checked={isRemote}
                                    onChange={(e) => setIsRemote(e.target.checked)}
                                    className="accent-violet-500 w-4 h-4"
                                />
                                <span className="text-xs text-gray-500">This is a remote position</span>
                            </label>
                        </div>

                        {/* Application Deadline */}
                        <TextField name="deadline" className="flex flex-col gap-1">
                            <Label className="text-sm font-medium text-gray-300">Application Deadline</Label>
                            <div className="relative flex items-center">
                                <span className="absolute left-3 pointer-events-none">
                                    <Calendar width={16} height={16} className="text-gray-500" />
                                </span>
                                <Input
                                    type="date"
                                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] data-[focus=true]:bg-[#0f0f0f] text-white text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors [color-scheme:dark]"
                                />
                            </div>
                        </TextField>

                    </div>
                </div>

                {/* ── Job Description Section ── */}
                <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-5 sm:p-6">
                    <h2 className="text-white font-semibold text-lg mb-5">Job Description</h2>

                    <div className="flex flex-col gap-5">

                        {/* Responsibilities */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-300">Responsibilities</label>
                            <textarea
                                name="responsibilities"
                                rows={4}
                                required
                                placeholder="Describe the day-to-day responsibilities for this role..."
                                className="w-full px-4 py-3 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] text-white placeholder:text-gray-600 text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors resize-y"
                            />
                        </div>

                        {/* Requirements */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-300">Requirements</label>
                            <textarea
                                name="requirements"
                                rows={4}
                                required
                                placeholder="List the skills, experience, and qualifications needed..."
                                className="w-full px-4 py-3 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] text-white placeholder:text-gray-600 text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors resize-y"
                            />
                        </div>

                        {/* Benefits (optional) */}
                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-300">
                                Benefits <span className="text-gray-600">(optional)</span>
                            </label>
                            <textarea
                                name="benefits"
                                rows={3}
                                placeholder="Health insurance, remote work, flexible hours..."
                                className="w-full px-4 py-3 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] text-white placeholder:text-gray-600 text-sm outline-none focus:border-violet-500 hover:border-violet-400 transition-colors resize-y"
                            />
                        </div>

                    </div>
                </div>

                {/* ── Company Section (auto-filled, read-only) ── */}
                <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-5 sm:p-6">
                    <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                        <House width={18} height={18} className="text-violet-400" />
                        Company
                    </h2>
                    <div className="flex items-center justify-between bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl px-4 py-3">
                        <div>
                            <p className="text-white font-medium text-sm">{company.name}</p>
                            <p className="text-gray-500 text-xs">{company.industry}</p>
                        </div>
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                            Approved
                        </span>
                    </div>
                </div>

                {/* ── Actions ── */}
                <div className="flex flex-col sm:flex-row justify-end gap-3">
                    <Button
                        type="button"
                        className="border border-[#2a2a2a] hover:border-[#3a3a3a] hover:bg-[#1f1f1f] bg-[#0f0f0f] text-gray-300 font-medium text-sm h-11 px-6 rounded-xl transition-all"
                    >
                        Save as Draft
                    </Button>
                    <Button
                        type="submit"
                        className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-sm h-11 px-6 rounded-xl shadow-md shadow-violet-900/40 transition-all"
                    >
                        Publish Job
                    </Button>
                </div>

            </Form>
        </div>
    );
}