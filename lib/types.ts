export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'STAFF' | 'MEMBER';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  gymId?: string;
}

export interface Gym {
  id: string;
  name: string;
  address: string;
  adminId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Member {
  id: string;
  userId: string;
  gymId: string;
  planId: string;
  joinDate: string;
  status: 'ACTIVE' | 'INACTIVE';
}

export interface Staff {
  id: string;
  userId: string;
  gymId: string;
  position: string;
  joinDate: string;
  status: 'ACTIVE' | 'INACTIVE';
}

export interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  features: string[];
}

export interface Payment {
  id: string;
  memberId: string;
  amount: number;
  status: 'PENDING' | 'COMPLETED' | 'FAILED';
  paymentDate: string;
  dueDate: string;
}

export interface Attendance {
  id: string;
  memberId: string;
  checkIn: string;
  checkOut?: string;
}
