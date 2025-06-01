import { type SidebarItem } from './use-sidebar';

interface SidebarItemProps {
  item: SidebarItem;
  level?: number;
  isOpen: boolean;
  isExpanded: boolean;
  isActive: boolean;
  onItemClick: (itemId: string) => void;
}

export default function SidebarItem({
  item,
  level = 0,
  isOpen,
  isActive,
  onItemClick,
}: SidebarItemProps) {
  const Icon = item.icon;

  return (
    <div>
      <button
        onClick={() => onItemClick(item.id)}
        className={`
          w-full flex items-center px-4 py-3 text-left transition-all duration-200
          ${level > 0 ? 'pl-12' : ''}
          ${
            isActive
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          }
          ${!isOpen && level === 0 ? 'justify-center px-2' : 'justify-between'}
        `}
      >
        <div className='flex items-center space-x-3'>
          <Icon
            className={`${
              isOpen || level > 0 ? 'w-5 h-5' : 'w-6 h-6'
            } flex-shrink-0`}
          />
          {(isOpen || level > 0) && (
            <span className='font-medium truncate'>{item.label}</span>
          )}
        </div>
      </button>
    </div>
  );
}
