import { useNavigate } from 'react-router-dom';
import useAuthContext from './useAuthContext';

const useRequireAuth = () => {
  const navigate = useNavigate();
  const { loggedIn } = useAuthContext();

  if (!loggedIn) {
    navigate('/');
  }

  return {};
};

export default useRequireAuth;
