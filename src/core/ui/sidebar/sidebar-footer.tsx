import type User from '../../../features/auth/types/user';

const formatName = (name: string) => {
  const parts = name.split(' ');
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return parts[0].charAt(0).toUpperCase() + parts[1].charAt(0).toUpperCase();
};

interface SidebarFooterProps {
  isOpen: boolean;
  onLogout?: () => void;
  user?: User;
}

export default function SidebarFooter({
  isOpen,
  onLogout,
  user,
}: SidebarFooterProps) {
  return (
    <div className='p-4 border-t border-gray-700'>
      <div
        className={`flex items-center space-x-3 ${
          !isOpen ? 'justify-center' : ''
        }`}
      >
        {user && (
          <>
            <div className='w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center'>
              <span className='text-sm font-medium'>
                {formatName(user.name)}
              </span>
            </div>
            {isOpen && (
              <div className='flex-1 min-w-0'>
                <p className='text-sm font-medium truncate'>{user.name}</p>
                <p className='text-xs text-gray-400 truncate'>{user.email}</p>
              </div>
            )}
          </>
        )}
      </div>

      <button
        onClick={onLogout}
        className={`mt-4 flex items-center w-full  py-2 text-left rounded-md hover:bg-gray-700 transition-colors
          ${!isOpen ? 'justify-center px-1' : 'px-4'}`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
          />
        </svg>
        {isOpen && <span className='ml-3'>Logout</span>}
      </button>
    </div>
  );
}
