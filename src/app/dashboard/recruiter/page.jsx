'use client'
import { useSession } from '@/lib/auth-client';
import React from 'react';
import StatsSection from '@/components/Dashboard/StatsSection';
import RecentApplications from '@/components/Dashboard/RecentApplications';
import TopCompanies from '@/components/Dashboard/TopCompanies';
import { FileText, Persons, Thunderbolt, CircleCheck } from '@gravity-ui/icons';

const RecruiterDashboardHomePage = () => {
    const { data: session, isPending } = useSession()

    if (isPending) {
        return <div>Loading...</div>
    }

    const user = session?.user;

    const recruiterStats = [
        { icon: FileText, label: 'Total Job Posts', value: 48 },
        { icon: Persons, label: 'Total Applicants', value: '1,284' },
        { icon: Thunderbolt, label: 'Active Jobs', value: 18 },
        { icon: CircleCheck, label: 'Jobs Closed', value: 32 },
    ];

    const recentApplications = [
        { applicantName: 'Julianne Moore', jobTitle: 'Senior Product Designer', appliedDate: 'Oct 24, 2023', experience: '6 years', status: 'Interviewing' },
        { applicantName: 'Robert Downey', jobTitle: 'Backend Engineer', appliedDate: 'Oct 23, 2023', experience: '4 years', status: 'New' },
        { applicantName: 'Emma Stone', jobTitle: 'Marketing Lead', appliedDate: 'Oct 22, 2023', experience: '8 years', status: 'Reviewing' },
        { applicantName: 'Chris Pratt', jobTitle: 'Product Manager', appliedDate: 'Oct 21, 2023', experience: '5 years', status: 'Rejected' },
    ];

    const topCompanies = [
        { name: 'Google Inc.', category: 'Technology', location: 'Mountain View', activeJobs: 24 },
        { name: 'Meta Platforms', category: 'Social Media', location: 'Menlo Park', activeJobs: 18 },
        { name: 'Stripe', category: 'Fintech', location: 'San Francisco', activeJobs: 12 },
        { name: 'Tesla', category: 'Automotive', location: 'Austin', activeJobs: 31 },
    ];

    return (
        <div className="p-4 sm:p-6 lg:p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">Welcome Back, {user?.name}</h2>

            <StatsSection stats={recruiterStats} />

            <div className="@container">
                <div className="space-y-6">
                    <RecentApplications applications={recentApplications} />
                    <TopCompanies companies={topCompanies} />
                </div>
            </div>
        </div>
    );
};

export default RecruiterDashboardHomePage;