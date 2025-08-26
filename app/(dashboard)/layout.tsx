'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Sidebar } from '@/components/layout/Sidebar';
import { UserRole } from '@/lib/types';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userRole: UserRole;
}

export default function DashboardLayout({
  children,
  userRole,
}: DashboardLayoutProps) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-background">
        <Sidebar userRole={userRole} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
