import React from 'react';

const StatCard = ({ icon: Icon, label, value }) => {
    return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 sm:p-5 flex flex-col gap-4 sm:gap-6">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-neutral-800 flex items-center justify-center">
                <Icon className="w-5 h-5 text-neutral-300" />
            </div>
            <div>
                <p className="text-sm text-neutral-400">{label}</p>
                <p className="text-2xl sm:text-3xl font-semibold text-white mt-1">{value}</p>
            </div>
        </div>
    );
};

export default StatCard;