import type React from 'react';
import { useSidebar, type SidebarItem } from '../ui/sidebar/use-sidebar';
import Sidebar from '../ui/sidebar/sidebar';
import TopBar from '../ui/top-bar';

import { useAuth } from '@/features/auth/hooks/use-auth';

interface SidebarLayoutProps {
  children: React.ReactNode;
  title?: string;
  items?: SidebarItem[];
}

export default function MainLayout({
  children,
  title,
  items = [],
}: SidebarLayoutProps) {
  const { isOpen, expandedItems, activeItem, toggleSidebar, handleItemClick } =
    useSidebar();

  const { user, logout } = useAuth();

  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar
        user={user}
        isOpen={isOpen}
        items={items}
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
