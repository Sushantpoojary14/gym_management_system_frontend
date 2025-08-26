import { UserRole } from './types';

const ROLES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  STAFF: 'STAFF',
  MEMBER: 'MEMBER',
} as const;

export function hasRequiredRole(userRole: UserRole, requiredRole: keyof typeof ROLES): boolean {
  const roleHierarchy = {
    [ROLES.SUPER_ADMIN]: 4,
    [ROLES.ADMIN]: 3,
    [ROLES.STAFF]: 2,
    [ROLES.MEMBER]: 1,
  };

  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
}

export function getRedirectPath(role: UserRole): string {
  switch (role) {
    case ROLES.SUPER_ADMIN:
      return '/super-admin';
    case ROLES.ADMIN:
      return '/admin';
    case ROLES.STAFF:
      return '/staff';
    case ROLES.MEMBER:
      return '/member';
    default:
      return '/login';
  }
}
