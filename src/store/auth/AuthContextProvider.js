import { useReducer, useMemo } from 'react';
import AuthContext from './AuthContext';

const defaultAuthState = {
  loggedIn: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      console.log(action.otp);
      return {
        loggedIn: true,
      };
    }
    case 'LOGOUT': {
      return {
        loggedIn: false,
      };
    }
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, defaultAuthState);

  const handleLogin = (otp) => {
    dispatch({ type: 'LOGIN', otp });
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const authContext = useMemo(
    () => ({
      loggedIn: authState.loggedIn,
      login: handleLogin,
      logout: handleLogout,
    }),
    [authState.loggedIn]
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
