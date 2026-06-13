import  DashboardSidebar  from '@/components/Dashboard/DashboardSidebar';
import React from 'react';

export default function DashboardLayout({ children }) {
  return (
    <div>
        <div className="flex min-h-screen">
          <DashboardSidebar />
            <div className='flex-1'>{children}</div>
        </div>
    </div>
  )
}