import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';
import AccountSettings from 'src/pages/AccountSettings';
import Login from '../pages/user/Login';
import Register from '../pages/user/Register';
import AuthGuard from './authguard';
import GettingStarted from '../pages/GettingStarted';


// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Navigate to="/dashboard" replace />,
    },

    //Routes User

    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (    
            localStorage.getItem('access_token') === null ? <Login/> : <Navigate to="/dashboard/inventory" replace />
          ),
        },
        {
          path: 'register',
          element: (    
            localStorage.getItem('access_token') === null ? <Register/> : <Navigate to="/dashboard/inventory" replace />
          ),
        },
        
      ],
    },



    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to="/dashboard/inventory" replace />, index: true },
        { path: 'inventory', element: <Inventory /> },
        { path: 'order', element: <Order /> },
        { path: 'account', element: <AccountSettings/> },
       
      ],
    },


    {
      path: 'new',
      element: (
        <AuthGuard>
          <GettingStarted />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to="get-started" replace />, index: true },
        { path: 'get-started', element: <GettingStarted /> },
      ],
    },


    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}


// Dashboard
const Inventory = Loadable(lazy(() => import('../pages/Inventory')));
const Order = Loadable(lazy(() => import('../pages/Order')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
