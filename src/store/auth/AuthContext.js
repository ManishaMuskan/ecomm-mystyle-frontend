import { createContext } from 'react';

const AuthContext = createContext({
  loggedIn: false,
  authToken: null,
  login: () => {},
  logout: () => {},
  mobileSignupSignin: () => {},
  verifyMobileOtp: () => {},
  resendOtp: () => {},
});

export default AuthContext;
