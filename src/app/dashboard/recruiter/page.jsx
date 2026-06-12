'use client'
import { useSession } from '@/lib/auth-client';
import React from 'react';

const RecruiterDashboardHomePage = () => {
    const {data: session, isPending} = useSession()

    if(isPending){
        return <div>Loading...</div>
    }

    const user = session?.user;
    
    return (
        <div>
            <h2>Welcome Back, {user?.name}</h2>
        </div>
    );
};

export default RecruiterDashboardHomePage;