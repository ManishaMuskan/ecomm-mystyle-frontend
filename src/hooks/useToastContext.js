import { useContext } from 'react';
import { ToastContext } from '../store/ui/ToastProvider';

const useToastContext = () => {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error(
      'useToastContext must be used inside an ToastContextProvider '
    );
  }

  return toastContext;
};

export default useToastContext;
