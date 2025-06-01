import type User from '../types/user';
import UserGender from './user-gender';

interface UserCardProps<T extends User> {
  item: T;
}

export default function UserCard<T extends User>({ item }: UserCardProps<T>) {
  return (
    <div className='flex items-center p-4 my-2 bg-white rounded-md shadow-sm transition duration-200'>
      <img
        src={item.picture.thumbnail}
        alt={`${item.name.first} ${item.name.last}`}
        className='w-10 h-10 rounded-full mr-4'
      />
      <div className='flex flex-col gap-1'>
        <div className='flex items-center'>
          <div className='font-medium text-gray-900'>
            {item.name.first} {item.name.last}
          </div>
          <UserGender gender={item.gender} />
        </div>
        <div className='text-sm text-gray-500'>{item.email}</div>
      </div>
    </div>
  );
}
