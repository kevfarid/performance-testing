import axios from 'axios';
import { AuthConstants } from '../../features/auth/constants';

const http = axios.create({
  baseURL: 'https://randomuser.me/api',
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(AuthConstants.TOKEN_STORAGE_KEY);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
