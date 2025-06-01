import type React from 'react';
import { useSidebar, type SidebarItem } from '../ui/sidebar/use-sidebar';
import Sidebar from '../ui/sidebar/sidebar';
import TopBar from '../ui/top-bar';

import { User } from 'lucide-react';
import { useAuth } from '@/features/auth/hooks/use-auth';

export const sidebarItems: SidebarItem[] = [
  {
    id: 'users',
    label: 'Users',
    icon: User,
    href: '/users',
  },
];

interface SidebarLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function MainLayout({ children, title }: SidebarLayoutProps) {
  const { isOpen, expandedItems, activeItem, toggleSidebar, handleItemClick } =
    useSidebar();

  const { user, logout } = useAuth();

  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar
        user={user}
        isOpen={isOpen}
        items={sidebarItems}
        expandedItems={expandedItems}
        activeItem={activeItem}
        onToggle={toggleSidebar}
        onItemClick={handleItemClick}
        onLogout={logout}
      />

      <div className='flex-1 flex flex-col overflow-hidden'>
        <TopBar title={title} />
        <main className='flex-1 overflow-y-auto p-4 bg-white'>{children}</main>
      </div>
    </div>
  );
}
