import { User } from 'lucide-react';
import type { SidebarItem } from '../ui/sidebar/use-sidebar';

const sidebarItems: SidebarItem[] = [
  {
    id: 'users',
    label: 'Users',
    icon: User,
    href: '/users',
  },
];

export default sidebarItems;
