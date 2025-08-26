'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { UserRole } from '@/lib/types';
import { hasRequiredRole } from '@/lib/auth';

interface RoleGuardProps {
  children: React.ReactNode;
  requiredRole: UserRole;
}

export function RoleGuard({ children, requiredRole }: RoleGuardProps) {
  const router = useRouter();
  
  // In a real app, you would get this from your auth state
  const userRole = 'MEMBER' as UserRole; // TODO: Replace with actual user role

  useEffect(() => {
    if (!hasRequiredRole(userRole, requiredRole)) {
      router.push('/login');
    }
  }, [userRole, requiredRole, router]);

  if (!hasRequiredRole(userRole, requiredRole)) {
    return null;
  }

  return <>{children}</>;
}
