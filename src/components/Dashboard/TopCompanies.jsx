import React from 'react';
import CompanyItem from './CompanyItem';

const TopCompanies = ({ title = 'My Top Companies', viewAllHref = '#', companies = [], onViewAll }) => {
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <a href={viewAllHref} className="text-sm text-neutral-400 hover:text-white transition-colors">
                    View all
                </a>
            </div>

            <div className="divide-y divide-neutral-800">
                {companies.map((company, index) => (
                    <CompanyItem
                        key={index}
                        name={company.name}
                        category={company.category}
                        location={company.location}
                        activeJobs={company.activeJobs}
                    />
                ))}
            </div>

            <button
                onClick={onViewAll}
                className="w-full mt-4 py-2.5 rounded-lg border border-neutral-700 text-sm font-medium text-neutral-200 hover:bg-neutral-800 transition-colors"
            >
                View All Companies
            </button>
        </div>
    );
};

export default TopCompanies;