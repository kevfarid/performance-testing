import type { LoginResponse } from '../types/login-response';

export function loginService(
  email: string,
  password: string
): Promise<LoginResponse> {
  const fakeData = {
    user: {
      id: email + password,
      name: 'John Doe',
      email: email,
    },
    token: btoa(
      JSON.stringify({
        userId: email + password,
      })
    ),
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: fakeData,
      });
    }, 1000);
  });
}
