import { useMemo, useReducer } from 'react';
import authService from '../../services/AuthService';
import AuthContext from './AuthContext';

const defaultAuthState = {
  loggedIn: false,
  authUser: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'OTP_VERIFIED_AND_LOGGED_IN': {
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

    dispatch({ type: 'OTP_VERIFIED_AND_LOGGED_IN', authUser: result.profile });
  };

  const handleResendOtp = async (mobile) => {
    const result = await authService.resendOtp(mobile);
    localStorage.setItem('mobileVerificationToken', result.token);
  };

  const handleLogout = async () => {
    dispatch({ type: 'LOGOUT' });
    await authService.logout();
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

  // TODO: check user authentication when page loads or reloads to persist the login status -
  // useEffect(() => {/getUser or /me/profile}) by using auth-token stored in local-storage

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
