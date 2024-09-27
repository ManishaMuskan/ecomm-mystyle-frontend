import { createContext, useCallback, useMemo, useState } from 'react';
import { generateUID } from '../../utils/helpers';

export const ToastContext = createContext({
  toasts: null,
  addToast: () => {},
  removeToast: () => {},
});

export const ToastContextProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'error') => {
    setToasts((oldToasts) => [
      ...oldToasts,
      {
        id: generateUID(Date.now()),
        message,
        type,
      },
    ]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((oldToasts) =>
      oldToasts.filter((toast) => {
        return id !== toast.id;
      })
    );
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
