'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Users,
  Clipboard,
  CreditCard,
  Bell,
  Settings,
  Home
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserRole } from '@/lib/types';

const routes = {
  SUPER_ADMIN: [
    { href: '/super-admin', label: 'Dashboard', icon: Home },
    { href: '/super-admin/gyms', label: 'Gyms', icon: Settings },
    { href: '/super-admin/plans', label: 'Plans', icon: CreditCard },
  ],
  ADMIN: [
    { href: '/admin', label: 'Dashboard', icon: Home },
    { href: '/admin/staff', label: 'Staff', icon: Users },
    { href: '/admin/members', label: 'Members', icon: Users },
    { href: '/admin/attendance', label: 'Attendance', icon: Clipboard },
    { href: '/admin/payments', label: 'Payments', icon: CreditCard },
  ],
  STAFF: [
    { href: '/staff', label: 'Dashboard', icon: Home },
    { href: '/staff/members', label: 'Members', icon: Users },
    { href: '/staff/attendance', label: 'Attendance', icon: Clipboard },
  ],
  MEMBER: [
    { href: '/member', label: 'Dashboard', icon: Home },
    { href: '/member/attendance', label: 'Attendance', icon: Clipboard },
    { href: '/member/payments', label: 'Payments', icon: CreditCard },
    { href: '/member/notifications', label: 'Notifications', icon: Bell },
  ],
};

interface SidebarProps {
  userRole: UserRole;
}

export function Sidebar({ userRole }: SidebarProps) {
  const pathname = usePathname();

  const links = routes[userRole] || [];

  return (
    <div className="h-full space-y-4 py-4 flex flex-col bg-accent/20">
      <div className="px-3 py-2 flex-1">
        <div className="space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-accent/50 rounded-lg',
                pathname === link.href ? 'bg-accent' : 'transparent',
              )}
            >
              <div className="flex items-center flex-1">
                <link.icon className={cn('h-5 w-5 mr-3')} />
                {link.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
