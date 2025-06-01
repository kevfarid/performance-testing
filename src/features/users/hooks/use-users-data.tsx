import { useState, useCallback, useEffect } from 'react';
import type User from '../types/user';
import { getList } from '../services/users';

export default function useUsersData() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = useCallback(() => {
    getList()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error('Error fetching list:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    getData();
  }, [getData]);

  return {
    data,
    loading,
    refetch: getData,
  };
}
