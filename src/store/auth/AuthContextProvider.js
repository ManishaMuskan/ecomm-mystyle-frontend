import { useMemo, useReducer } from 'react';
import authService from '../../services/AuthService';
import AuthContext from './AuthContext';

const defaultAuthState = {
  loading: false,
  loaded: true,
  loggedIn: false,
  authToken: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOADING': {
      return {
        ...state,
        loaded: false,
        loading: true,
      };
    }
    case 'LOADED': {
      return {
        ...state,
        loaded: true,
        loading: false,
      };
    }
    case 'OTP_VERIFIED_AND_LOGGED_IN': {
      return {
        ...state,
        loaded: true,
        loading: false,
        loggedIn: true,
        authToken: action.authToken,
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

  const handleMobileSignupSignin = async (mobile) => {
    dispatch({ type: 'LOADING' });
    const { token } = await authService.mobileSignupSignin(mobile);
    dispatch({ type: 'LOADED' });

    localStorage.setItem('mobileVerificationToken', token);
  };

  const handleMobileOtpVerification = async (otp) => {
    dispatch({ type: 'LOADING' });
    const mobileVerificationToken = localStorage.getItem(
      'mobileVerificationToken'
    );
    const { token, profile } = await authService.verifyMobileOtp(
      otp,
      mobileVerificationToken
    );
    localStorage.setItem('authToken', token);
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.removeItem('mobileVerificationToken');
    dispatch({ type: 'OTP_VERIFIED_AND_LOGGED_IN', authToken: token });
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const authContext = useMemo(
    () => ({
      loggedIn: authState.loggedIn,
      authToken: authState.authToken,
      mobileSignupSignin: handleMobileSignupSignin,
      verifyMobileOtp: handleMobileOtpVerification,
      logout: handleLogout,
    }),
    [authState.loggedIn, authState.authToken]
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
