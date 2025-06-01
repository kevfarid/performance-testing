interface TopBarProps {
  title?: string;
}

export default function TopBar({ title = 'Dashboard' }: TopBarProps) {
  return (
    <header className='bg-white shadow-sm border-b border-gray-200 px-6 py-4'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-semibold text-gray-800'>{title}</h2>
        <div className='flex items-center space-x-4'>
          <div className='w-8 h-8 bg-gray-300 rounded-full'></div>
        </div>
      </div>
    </header>
  );
}
