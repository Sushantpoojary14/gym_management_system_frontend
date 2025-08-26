# Gym Management System (GMS)

A comprehensive gym management system built with Next.js 15 and TypeScript.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- Redux Toolkit (Authentication, Theme)
- TanStack Query (API Integration)
- Axios (API Client)
- React Hook Form + Zod (Forms)
- Framer Motion (Animations)
- React Hot Toast (Notifications)
- Chart.js (Analytics)
- Day.js (Date Formatting)
- Lucide React (Icons)

## Features

### Authentication
- Role-based access control (Super Admin, Admin, Staff, Member)
- JWT authentication with refresh tokens
- Protected routes and API endpoints

### Super Admin Dashboard
- Manage multiple gyms
- Create and manage gym admins
- View system-wide analytics
- Manage subscription plans

### Admin Dashboard
- Staff management
- Member management
- Attendance tracking
- Payment processing
- Analytics and reports

### Staff Dashboard
- Mark member attendance
- View assigned members
- Basic member management

### Member Dashboard
- View attendance history
- Payment history
- Notifications
- Progress tracking

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
frontend/
├── app/                    # App Router pages
├── components/             # Reusable components
├── features/              # Feature modules
├── lib/                   # Utilities and configurations
└── public/               # Static assets
```

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request
# gym_management_system_frontend
