import { Loader2 } from 'lucide-react';

import Virtualizer from '@/core/ui/virtualizer/virtualizer';

import UserCard from './components/user-card';
import useUsersData from './hooks/use-users-data';

export default function List() {
  const { data, loading } = useUsersData();

  return (
    <div className='h-[calc(100dvh-120px)]'>
      <h1>List of User</h1>
      {loading && (
        <div className='animate-spin w-full flex justify-center text-indigo-500'>
          <Loader2 />
        </div>
      )}
      <Virtualizer rowHeight={80}>
        {data?.map((item, index) => (
          <li key={index}>
            <UserCard item={item} />
          </li>
        ))}
      </Virtualizer>
    </div>
  );
}
