import { useEffect, useMemo, useReducer } from 'react';
import authService from '../../services/AuthService';
import authUserService from '../../services/AuthUserService';
import AuthContext from './AuthContext';

const defaultAuthState = {
  loggedIn: false,
  authUser: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'OTP_VERIFIED_AND_LOGGED_IN':
    case 'ACCESSED_PUBLIC_PROFILe': {
      return {
        ...state,
        loggedIn: true,
        authUser: action.authUser,
      };
    }

    case 'LOGOUT': {
      return {
        ...state,
        loggedIn: false,
        authUser: null,
      };
    }

    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, defaultAuthState);

  const handleMobileSignupSignin = async (mobileNumber) => {
    // try {
    const { token } = await authService.mobileSignupSignin(mobileNumber);
    localStorage.setItem('mobileVerificationToken', token);
    localStorage.setItem('mobileNumber', mobileNumber);

    // } catch (error) {
    //   console.log('error---', error);
    //   throw error;
    // }
  };

  const handleMobileOtpVerification = async (otp) => {
    const result = await authService.verifyMobileOtp(otp);
    dispatch({ type: 'OTP_VERIFIED_AND_LOGGED_IN', authUser: result.profile });

    localStorage.setItem('authToken', result.token);
    localStorage.setItem('profile', JSON.stringify(result.profile));
    localStorage.removeItem('mobileVerificationToken');
  };

  const handleResendOtp = async (mobile) => {
    const result = await authService.resendOtp(mobile);
    localStorage.setItem('mobileVerificationToken', result.token);
  };

  const handleLogout = async () => {
    await authService.logout();
    dispatch({ type: 'LOGOUT' });
    localStorage.clear();
  };

  const authContextValue = useMemo(
    () => ({
      loggedIn: authState.loggedIn,
      authUser: authState.authUser,
      mobileSignupSignin: handleMobileSignupSignin,
      verifyMobileOtp: handleMobileOtpVerification,
      logout: handleLogout,
      resendOtp: handleResendOtp,
    }),
    [authState.loggedIn, authState.authUser]
  );

  useEffect(() => {
    // check user authentication when page loads or reloads to persist the login status
    const checkAuth = async () => {
      const authToken = localStorage.getItem('authToken');

      if (!authToken) {
        return; // No token [indicating not logged in], exit early
      }

      // Check if authUser is already set to prevent calling API again
      if (!authState.authUser) {
        const authUser = await authUserService.getUserPublicProfile();
        localStorage.setItem('profile', JSON.stringify(authUser.profile));
        dispatch({
          type: 'ACCESSED_PUBLIC_PROFILe',
          authUser: authUser.profile,
        });
      }
    };

    checkAuth();
  }, [authState.authUser]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
