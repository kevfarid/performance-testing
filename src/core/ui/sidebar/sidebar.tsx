import SidebarHeader from './sidebar-header';
import SidebarNavigation from './sidebar-navigation';
import SidebarFooter from './sidebar-footer';
import type { SidebarItem } from './use-sidebar';
import type User from '../../../features/auth/types/user';

interface SidebarProps {
  isOpen: boolean;
  items: SidebarItem[];
  expandedItems: string[];
  activeItem: string;
  onToggle: () => void;
  onItemClick: (itemId: string) => void;
  onLogout?: () => void;
  user: User | undefined;
}

export default function Sidebar({
  isOpen,
  items,
  expandedItems,
  activeItem,
  user,
  onToggle,
  onItemClick,
  onLogout,
}: SidebarProps) {
  return (
    <div
      className={`
        bg-gray-800 text-white transition-all duration-300 ease-in-out flex flex-col
        ${isOpen ? 'w-64' : 'w-16'}
      `}
    >
      <SidebarHeader isOpen={isOpen} onToggle={onToggle} />

      <SidebarNavigation
        items={items}
        isOpen={isOpen}
        expandedItems={expandedItems}
        activeItem={activeItem}
        onItemClick={onItemClick}
      />

      <SidebarFooter isOpen={isOpen} onLogout={onLogout} user={user} />
    </div>
  );
}
