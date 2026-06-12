import React from 'react';

const CompanyItem = ({ name, category, location, activeJobs }) => {
    return (
        <div className="flex items-center gap-4 py-3">
            <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-semibold text-neutral-300">{name?.charAt(0)}</span>
            </div>
            <div className="flex-1 min-w-0">
                <p className="font-semibold text-white truncate">{name}</p>
                <p className="text-sm text-neutral-400 truncate">{category} • {location}</p>
            </div>
            <div className="text-right flex-shrink-0">
                <p className="font-semibold text-white">{activeJobs}</p>
                <p className="text-xs text-neutral-400 uppercase tracking-wide">Active Jobs</p>
            </div>
        </div>
    );
};

export default CompanyItem;