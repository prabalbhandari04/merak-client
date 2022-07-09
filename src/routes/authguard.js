import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


export default function AuthGuard({ children }) {

  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (localStorage.getItem('access_token') === null) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Navigate to="/auth/login" />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}
