import type ResponseApi from '../../../core/types/response-api';
import type User from './user';

export type LoginResponse = ResponseApi<{
  user: User;
  token: string;
}>;
