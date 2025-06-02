import sidebarItems from './core/constants/sidebar-items';
import MainLayout from './core/layouts/main-layout';
import { createPrivateRoutes } from './core/routes/create-private-routes';
import Users from './features/users/users';

const privateRoutes = createPrivateRoutes({
  layout: MainLayout,
  layoutProps: {
    items: sidebarItems,
  },
  defaultRedirect: '/users',
  routes: [
    {
      path: 'users',
      Component: Users,
    },
  ],
});

export default privateRoutes;
