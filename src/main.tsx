import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import Login from './features/auth/login';
import { AuthProvider } from './features/auth/provider/auth-provider';
import ProtectedRoute from './core/routes/protected-router';
import MainLayout from './core/layouts/main-layout';
import Users from './features/users/users';

const router = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/',
    element: (
      <MainLayout>
        <ProtectedRoute />
      </MainLayout>
    ),
    children: [
      {
        path: '',
        element: <Navigate to='/users' replace />,
      },
      {
        path: 'users',
        Component: Users,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
