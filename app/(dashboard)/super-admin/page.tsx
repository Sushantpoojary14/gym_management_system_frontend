'use client';

import { RoleGuard } from '@/components/shared/RoleGuard';

export default function SuperAdminDashboard() {
  return (
    <RoleGuard requiredRole="SUPER_ADMIN">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Add dashboard cards here */}
        </div>
      </div>
    </RoleGuard>
  );
}
