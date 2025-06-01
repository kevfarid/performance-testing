import { memo } from 'react';

interface UserGenderProps {
  gender: 'male' | 'female';
}

function UserGender({ gender }: UserGenderProps) {
  return (
    <span
      className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
        gender === 'male'
          ? 'bg-blue-100 text-blue-800'
          : 'bg-pink-100 text-pink-800'
      }`}
    >
      {gender}
    </span>
  );
}

export default memo(UserGender);
