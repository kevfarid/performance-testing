import { useIsMobile } from '@/core/hooks/use-is-mobile';
import type React from 'react';

import { useEffect, useState } from 'react';

export interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  children?: SidebarItem[];
}

export function useSidebar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(!isMobile);
  const [expandedItems, setExpandedItems] = useState<string[]>(['users']);
  const [activeItem, setActiveItem] = useState('dashboard');

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  return {
    isOpen,
    setIsOpen,
    expandedItems,
    activeItem,
    toggleSidebar,
    toggleExpanded,
    handleItemClick,
  };
}
