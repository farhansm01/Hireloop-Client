import { getCompanyJobs } from '@/lib/api/jobs';
import Link from 'next/link';
import { Briefcase, Plus, Eye, Pencil, TrashBin, Check } from '@gravity-ui/icons';

const statusStyles = {
    active: 'bg-green-500/10 text-green-400 border border-green-500/20',
    closed: 'bg-red-500/10 text-red-400 border border-red-500/20',
    draft: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
};

function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
    });
}

const RecruiterJobs = async () => {
    const companyId = 'company_123';
    const jobs = await getCompanyJobs(companyId);

    // plan usage (hardcoded for now)
    const plan = { name: 'Free', limit: 3 };
    const activeCount = jobs.filter(j => j.status === 'active').length;
    const atLimit = activeCount >= plan.limit;

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-6xl mx-auto">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-white text-2xl sm:text-3xl font-bold mb-1">Manage Jobs</h1>
                    <p className="text-gray-500 text-sm">View and manage all your job postings.</p>
                </div>
                <Link
                    href={atLimit ? '#' : '/dashboard/recruiter/jobs/new'}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all
                        ${atLimit
                            ? 'bg-[#1f1f1f] text-gray-600 border border-[#2a2a2a] cursor-not-allowed pointer-events-none'
                            : 'bg-[#7c3aed] hover:bg-[#6d28d9] text-white shadow-md shadow-violet-900/40'
                        }`}
                >
                    <Plus width={16} height={16} />
                    Post New Job
                </Link>
            </div>

            {/* Plan Usage */}
            <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-5 mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                        <Briefcase width={16} height={16} className="text-violet-400" />
                        <span className="text-sm text-gray-300 font-medium">
                            Plan Usage —{' '}
                            <span className="text-violet-400">{plan.name}</span>
                        </span>
                    </div>
                    <span className="text-sm text-gray-400">
                        <span className={activeCount >= plan.limit ? 'text-red-400 font-semibold' : 'text-white font-semibold'}>
                            {activeCount}
                        </span>
                        <span className="text-gray-600"> / {plan.limit} active job posts used</span>
                    </span>
                </div>
                <div className="w-full bg-[#0f0f0f] rounded-full h-2">
                    <div
                        className={`h-2 rounded-full transition-all ${activeCount >= plan.limit ? 'bg-red-500' : 'bg-violet-500'}`}
                        style={{ width: `${Math.min((activeCount / plan.limit) * 100, 100)}%` }}
                    />
                </div>
                {atLimit && (
                    <p className="text-xs text-red-400 mt-2">
                        You&apos;ve reached your plan&apos;s limit.{' '}
                        <Link href="/dashboard/recruiter/billing" className="underline hover:text-red-300">
                            Upgrade your plan
                        </Link>{' '}
                        to post more jobs.
                    </p>
                )}
            </div>

            {/* Table */}
            {jobs.length === 0 ? (
                <div className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-12 text-center">
                    <Briefcase width={32} height={32} className="text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400 font-medium mb-1">No jobs posted yet</p>
                    <p className="text-gray-600 text-sm">Click &quot;Post New Job&quot; to get started.</p>
                </div>
            ) : (
                <>
                    {/* Desktop Table */}
                    <div className="hidden md:block bg-[#161616] border border-[#2a2a2a] rounded-2xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-[#2a2a2a]">
                                    <th className="text-left text-gray-500 font-medium px-5 py-3.5">Job Title</th>
                                    <th className="text-left text-gray-500 font-medium px-5 py-3.5">Status</th>
                                    <th className="text-left text-gray-500 font-medium px-5 py-3.5">Applicants</th>
                                    <th className="text-left text-gray-500 font-medium px-5 py-3.5">Date Posted</th>
                                    <th className="text-left text-gray-500 font-medium px-5 py-3.5">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.map((job, i) => (
                                    <tr
                                        key={job._id}
                                        className={`border-b border-[#2a2a2a] hover:bg-[#1a1a1a] transition-colors ${i === jobs.length - 1 ? 'border-b-0' : ''}`}
                                    >
                                        <td className="px-5 py-4">
                                            <p className="text-white font-medium">{job.title}</p>
                                            <p className="text-gray-500 text-xs mt-0.5">{job.category} · {job.type}</p>
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${statusStyles[job.status] ?? statusStyles.draft}`}>
                                                {job.status}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-gray-300">
                                            {job.applicantsCount ?? 0}
                                        </td>
                                        <td className="px-5 py-4 text-gray-400">
                                            {formatDate(job.postedAt)}
                                        </td>
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-2">
                                                <Link
                                                    href={`/dashboard/recruiter/jobs/${job._id}/applicants`}
                                                    className="p-2 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] text-gray-400 hover:text-violet-400 hover:border-violet-500/40 transition-all"
                                                    title="View Applicants"
                                                >
                                                    <Eye width={14} height={14} />
                                                </Link>
                                                <Link
                                                    href={`/dashboard/recruiter/jobs/${job._id}/edit`}
                                                    className="p-2 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] text-gray-400 hover:text-blue-400 hover:border-blue-500/40 transition-all"
                                                    title="Edit"
                                                >
                                                    <Pencil width={14} height={14} />
                                                </Link>
                                                <button
                                                    className="p-2 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] text-gray-400 hover:text-green-400 hover:border-green-500/40 transition-all"
                                                    title={job.status === 'active' ? 'Close Job' : 'Reopen Job'}
                                                >
                                                    <Check width={14} height={14} />
                                                </button>
                                                <button
                                                    className="p-2 rounded-lg bg-[#0f0f0f] border border-[#2a2a2a] text-gray-400 hover:text-red-400 hover:border-red-500/40 transition-all"
                                                    title="Delete"
                                                >
                                                    <TrashBin width={14} height={14} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="flex flex-col gap-3 md:hidden">
                        {jobs.map((job) => (
                            <div key={job._id} className="bg-[#161616] border border-[#2a2a2a] rounded-2xl p-4">
                                <div className="flex items-start justify-between gap-2 mb-3">
                                    <div>
                                        <p className="text-white font-medium text-sm">{job.title}</p>
                                        <p className="text-gray-500 text-xs mt-0.5">{job.category} · {job.type}</p>
                                    </div>
                                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize shrink-0 ${statusStyles[job.status] ?? statusStyles.draft}`}>
                                        {job.status}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                    <span>{job.applicantsCount ?? 0} applicants</span>
                                    <span>{formatDate(job.postedAt)}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Link
                                        href={`/dashboard/recruiter/jobs/${job._id}/applicants`}
                                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#0f0f0f] border border-[#2a2a2a] text-gray-400 hover:text-violet-400 hover:border-violet-500/40 transition-all text-xs"
                                    >
                                        <Eye width={13} height={13} /> Applicants
                                    </Link>
                                    <Link
                                        href={`/dashboard/recruiter/jobs/${job._id}/edit`}
                                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[#0f0f0f] border border-[#2a2a2a] text-gray-400 hover:text-blue-400 hover:border-blue-500/40 transition-all text-xs"
                                    >
                                        <Pencil width={13} height={13} /> Edit
                                    </Link>
                                    <button className="p-2 rounded-xl bg-[#0f0f0f] border border-[#2a2a2a] text-gray-400 hover:text-red-400 hover:border-red-500/40 transition-all">
                                        <TrashBin width={13} height={13} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default RecruiterJobs;