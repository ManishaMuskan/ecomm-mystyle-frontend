import { useMemo, useReducer } from 'react';
import authService from '../../services/AuthService';
import AuthContext from './AuthContext';

const defaultAuthState = {
  loggedIn: false,
  authToken: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'OTP_VERIFIED_AND_LOGGED_IN': {
      return {
        ...state,
        loggedIn: true,
        authToken: action.authToken,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        authToken: null,
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
    // try {
    const { token } = await authService.mobileSignupSignin(mobile);
    localStorage.setItem('mobileVerificationToken', token);
    // } catch (error) {
    //   console.log('error---', error);
    //   throw error;
    // }
  };

  const handleMobileOtpVerification = async (otp) => {
    const result = await authService.verifyMobileOtp(otp);
    localStorage.setItem('authToken', result.token);
    localStorage.setItem('profile', JSON.stringify(result.profile));
    localStorage.removeItem('mobileVerificationToken');
    dispatch({ type: 'OTP_VERIFIED_AND_LOGGED_IN', authToken: result.token });
    return result;
  };

  const handleResendOtp = async (mobile) => {
    const result = await authService.resendOtp(mobile);
    localStorage.setItem('mobileVerificationToken', result.token);
    return result;
  };

  const handleLogout = async () => {
    dispatch({ type: 'LOGOUT' });
    await authService.logout();
  };

  const authContextValue = useMemo(
    () => ({
      loggedIn: authState.loggedIn,
      authToken: authState.authToken,
      mobileSignupSignin: handleMobileSignupSignin,
      verifyMobileOtp: handleMobileOtpVerification,
      logout: handleLogout,
      resendOtp: handleResendOtp,
    }),
    [authState.loggedIn, authState.authToken]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
