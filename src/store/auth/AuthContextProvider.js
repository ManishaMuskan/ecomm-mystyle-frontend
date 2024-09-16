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
    try {
      dispatch({ type: 'LOADING' });
      const mobileVerificationToken = localStorage.getItem(
        'mobileVerificationToken'
      );
      const result = await authService.verifyMobileOtp(
        otp,
        mobileVerificationToken
      );
      localStorage.setItem('authToken', result.token);
      localStorage.setItem('profile', JSON.stringify(result.profile));
      localStorage.removeItem('mobileVerificationToken');
      dispatch({ type: 'OTP_VERIFIED_AND_LOGGED_IN', authToken: result.token });
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const authContextValue = useMemo(
    () => ({
      loggedIn: authState.loggedIn,
      authToken: authState.authToken,
      loading: authState.loading,
      loaded: authState.loaded,
      mobileSignupSignin: handleMobileSignupSignin,
      verifyMobileOtp: handleMobileOtpVerification,
      logout: handleLogout,
    }),
    [
      authState.loggedIn,
      authState.authToken,
      authState.loading,
      authState.loaded,
    ]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
