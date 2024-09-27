import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.module.css';
import ToastStack from './components/UI/Toast/ToastStack';
import router from './routes/Routes';
import AuthContextProvider from './store/auth/AuthContextProvider';
import { ToastContextProvider } from './store/ui/ToastProvider';
import useToastContext from './hooks/useToastContext';
import ErrorBoundaryWrapper from './ErrorBoundary';

const App = () => {
  const { addToast } = useToastContext(); // Extract addToast function from context

  // Handle global errors and unhandled promise rejections
  useEffect(() => {
    window.onerror = function globalError(
      message,
      source,
      lineno,
      colno,
      error
    ) {
      const errorMessage = message || 'An unexpected error occurred';
      addToast({ message: errorMessage });
      console.error('Global Error Caught:', {
        message,
        source,
        lineno,
        colno,
        error,
      });
    };

    window.onunhandledrejection = function globalUnhandledRejection(event) {
      const errorMessage = event.reason?.message || 'Something went wrong!';
      addToast({ message: errorMessage });
      console.error('Unhandled Promise Rejection:', event.reason);
    };

    return () => {
      window.onerror = null;
      window.onunhandledrejection = null;
    };
  }, [addToast]);

  return (
    <ErrorBoundaryWrapper>
      <ToastContextProvider>
        <AuthContextProvider>
          <RouterProvider router={router} />
          <ToastStack />
        </AuthContextProvider>
      </ToastContextProvider>
    </ErrorBoundaryWrapper>
  );
};

export default App;
