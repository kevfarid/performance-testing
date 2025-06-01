import { useLocation } from 'react-router';
import SidebarItem from './sidebar-item';
import type { SidebarItem as SidebarItemType } from './use-sidebar';

interface SidebarNavigationProps {
  items: SidebarItemType[];
  isOpen: boolean;
  expandedItems: string[];
  activeItem: string;
  onItemClick: (itemId: string) => void;
}

export default function SidebarNavigation({
  items,
  isOpen,
  expandedItems,
  activeItem,
  onItemClick,
}: SidebarNavigationProps) {
  const { pathname } = useLocation();
  return (
    <nav className='flex-1 overflow-y-auto py-4'>
      <div className='space-y-1'>
        {items.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            isOpen={isOpen}
            isExpanded={expandedItems.includes(item.id)}
            isActive={
              activeItem === item.id || pathname.startsWith(item.href || '')
            }
            onItemClick={onItemClick}
          />
        ))}
      </div>
    </nav>
  );
}
