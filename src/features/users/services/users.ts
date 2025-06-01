import type ApiWithResult from '@/core/types/api-with-result';
import type User from '../types/user';

import http from '@/core/http';

export function getList(): Promise<User[]> {
  return http
    .get<ApiWithResult<User[]>>('/?results=2000')
    .then((response) => response.data.results);
}
