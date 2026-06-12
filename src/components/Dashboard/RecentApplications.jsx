import React from 'react';
import StatusBadge from './StatusBadge';

const RecentApplications = ({ title = 'Recent Applications', viewAllHref = '#', applications = [] }) => {
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 sm:px-6 py-4">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <a href={viewAllHref} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    View all
                </a>
            </div>

            {/* Table view - wider containers */}
            <table className="hidden @2xl:table w-full table-fixed">
                <colgroup>
                    <col className="w-[22%]" />
                    <col className="w-[28%]" />
                    <col className="w-[18%]" />
                    <col className="w-[14%]" />
                    <col className="w-[18%]" />
                </colgroup>
                <thead>
                    <tr className="border-t border-neutral-800 text-left">
                        <th className="px-6 py-3 text-xs font-semibold text-neutral-400 uppercase tracking-wide">Candidate Name</th>
                        <th className="px-6 py-3 text-xs font-semibold text-neutral-400 uppercase tracking-wide">Role</th>
                        <th className="px-6 py-3 text-xs font-semibold text-neutral-400 uppercase tracking-wide">Date Applied</th>
                        <th className="px-6 py-3 text-xs font-semibold text-neutral-400 uppercase tracking-wide">Experience</th>
                        <th className="px-6 py-3 text-xs font-semibold text-neutral-400 uppercase tracking-wide">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((app, index) => (
                        <tr key={index} className="border-t border-neutral-800">
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-neutral-700 flex-shrink-0" />
                                    <span className="font-medium text-white truncate">{app.applicantName}</span>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-neutral-300 truncate">{app.jobTitle}</td>
                            <td className="px-6 py-4 text-neutral-300 whitespace-nowrap">{app.appliedDate}</td>
                            <td className="px-6 py-4 text-neutral-300 whitespace-nowrap">{app.experience}</td>
                            <td className="px-6 py-4">
                                <StatusBadge status={app.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Card view - narrower containers */}
            <div className="@2xl:hidden divide-y divide-neutral-800">
                {applications.map((app, index) => (
                    <div key={index} className="px-4 sm:px-6 py-4 flex flex-col gap-3">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3 min-w-0">
                                <div className="w-8 h-8 rounded-full bg-neutral-700 flex-shrink-0" />
                                <span className="font-medium text-white truncate">{app.applicantName}</span>
                            </div>
                            <StatusBadge status={app.status} />
                        </div>
                        <div className="flex items-center justify-between text-sm text-neutral-400 pl-11 gap-4">
                            <span className="truncate">{app.jobTitle}</span>
                            <span className="flex-shrink-0 whitespace-nowrap">{app.experience}</span>
                        </div>
                        <div className="text-sm text-neutral-500 pl-11">
                            Applied {app.appliedDate}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentApplications;