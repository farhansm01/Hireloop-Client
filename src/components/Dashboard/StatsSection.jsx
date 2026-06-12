import React from 'react';
import StatCard from './StatCard';

const StatsSection = ({ stats = [] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
                <StatCard
                    key={index}
                    icon={stat.icon}
                    label={stat.label}
                    value={stat.value}
                />
            ))}
        </div>
    );
};

export default StatsSection;