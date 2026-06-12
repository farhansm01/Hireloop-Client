import React from 'react';

const statusStyles = {
    interviewing: 'bg-green-500/10 text-green-400',
    new: 'bg-neutral-700 text-neutral-200',
    reviewing: 'bg-amber-500/10 text-amber-400',
    rejected: 'bg-red-500/10 text-red-400',
};

const StatusBadge = ({ status }) => {
    const key = status?.toLowerCase();
    const style = statusStyles[key] || 'bg-neutral-700 text-neutral-300';

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${style}`}>
            {status}
        </span>
    );
};

export default StatusBadge;