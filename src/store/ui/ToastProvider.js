import { createContext, useCallback, useMemo, useState } from 'react';
import { generateUID } from '../../utils/helpers';

export const ToastContext = createContext({
  toasts: null,
  addToast: () => {},
  removeToast: () => {},
});

export const ToastContextProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  console.log('toasts', toasts);

  const addToast = useCallback((message, type = 'error') => {
    setToasts((oldToasts) => [
      ...oldToasts,
      {
        id: generateUID,
        message,
        type,
      },
    ]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((oldToasts) => oldToasts.filter((toast) => id !== toast.id));
  }, []);

  // Memoize the context values
  const ToastContextValues = useMemo(
    () => ({
      toasts,
      addToast,
      removeToast,
    }),
    [toasts, addToast, removeToast]
  );

  return (
    <ToastContext.Provider value={ToastContextValues}>
      {children}
    </ToastContext.Provider>
  );
};
