import { useContext } from 'react';
import AuthContext from '../store/auth/AuthContext';

const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(
      'useAuthContext must be used inside an AuthContextProvider '
    );
  }

  return authContext;
};

export default useAuthContext;
