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
import Organization from '../pages/organization/Organization';
import Team from '../pages/organization/Team';
import Teams from '../pages/Teams';
import Invoice from '../pages/invoice/Invoice';
import Customer from '../pages/customer/Customer';
import InvoiceDetails from '../pages/invoice/InvoiceDetails';


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
        { path: 'teams', element: <Teams/> },
        { path: 'invoice', element: <Invoice/> },
        { path: 'invoice/:id', element: <InvoiceDetails/> },
        { path: 'customer', element:  <Customer/> },
      ],
    },


    {
      path: 'new',
     
      children: [
        { element: <Navigate to="/404" replace />, index: true },
        { path: 'get-started', element: (<AuthGuard><GettingStarted /></AuthGuard>) },
        { path: 'organization', element: (<AuthGuard><Organization/></AuthGuard>) },   
        { path: 'team', element: (<AuthGuard><Team/></AuthGuard>) },   
        
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
