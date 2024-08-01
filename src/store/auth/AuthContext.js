import { createContext } from 'react';

const AuthContext = createContext({
  loggedIn: false,
  login: () => {},
  logout: () => {},
});

export default AuthContext;
