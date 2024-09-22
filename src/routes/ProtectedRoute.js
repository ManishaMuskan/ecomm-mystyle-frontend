import { Navigate, Outlet } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';

const ProtectedRoute = ({ canHaveFallBack, redirectTo = '/login' }) => {
  const { loggedIn, authUser } = useAuthContext();

  // Navigate to login if not logged in and fallback is not allowed
  if (!loggedIn) {
    return canHaveFallBack ? (
      <Outlet context={{ authUser: null }} />
    ) : (
      <Navigate
        to={`${redirectTo}?redirect=${window.location.pathname}`}
        replace
      />
    );
  }

  // Pass user in context for protected routes
  return <Outlet context={{ authUser }} />;
};

export default ProtectedRoute;
