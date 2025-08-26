'use client';

import Link from 'next/link';
import { LogOut, Menu } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold">
                GMS
              </Link>
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              type="button"
              className="p-1 rounded-full text-foreground hover:bg-accent"
            >
              <LogOut className="h-6 w-6" />
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {/* Add mobile menu items here */}
          </div>
        </div>
      )}
    </nav>
  );
}
