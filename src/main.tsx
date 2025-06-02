import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Login from './features/auth/login';
import { AuthProvider } from './features/auth/provider/auth-provider';
import privateRoutes from './privates-routes';

const router = createBrowserRouter([
  {
    path: '/login',
    Component: Login,
  },
  privateRoutes,
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
