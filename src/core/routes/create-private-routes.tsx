/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactElement,
} from 'react';
import { Navigate, type RouteObject } from 'react-router';
import ProtectedRoute from './protected-router';

interface PrivateRoutesParams<T extends ElementType = 'div'> {
  layout: T;
  routes: RouteObject[];
  layoutProps?: Omit<ComponentPropsWithoutRef<T>, 'children'>;
  defaultRedirect: string;
}

/**
 * Creates a configuration for private routes by wrapping them in a main layout component
 * and a protected route component.
 *
 * This function constructs a RouteObject that encapsulates protected routes. It renders the
 * provided main layout with optional layout properties, and nests a protected route along with
 * its child routes within it. The function also handles redirection from the base path to a
 * default redirect path.
 *
 * @template T - The element type for the layout component. Defaults to 'div'.
 * @param {object} params - An object containing the configuration for the private routes.
 * @param {React.ComponentType<any>} params.layout - The main layout component used as a wrapper.
 * @param {RouteObject[]} params.routes - An array of route objects representing nested routes.
 * @param {string} params.defaultRedirect - The path to redirect to when the base route is reached.
 * @param {Omit<ComponentPropsWithoutRef<T>, 'children'>} [params.layoutProps={}] - Additional props to be passed to the layout component (excluding children).
 * @param {string} [basePath=''] - The base path for this routing configuration. Defaults to '/' if empty.
 * @returns {RouteObject} A route object including the main layout, a protected route, and its child routes.
 */
export function createPrivateRoutes<T extends ElementType = 'div'>(
  {
    layout: MainLayout,
    routes,
    defaultRedirect,
    layoutProps = {} as Omit<ComponentPropsWithoutRef<T>, 'children'>,
  }: PrivateRoutesParams<T>,
  basePath: string = ''
): RouteObject {
  return {
    path: basePath || '/',
    element: (
      <MainLayout {...(layoutProps as any)}>
        <ProtectedRoute />
      </MainLayout>
    ) as ReactElement,
    children: [
      {
        path: '',
        element: <Navigate to={defaultRedirect} replace />,
      },
      {
        path: '*',
        element: <Navigate to={defaultRedirect} replace />,
      },
      ...routes,
    ],
  };
}
