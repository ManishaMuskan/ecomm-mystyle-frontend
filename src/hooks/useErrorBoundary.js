import { useState } from 'react';

const useErrorBoundary = () => {
  const [error, setError] = useState(null);

  const ErrorBoundary = ({ children }) => {
    if (error) {
      return <div>Something went wrong: {error.message}</div>;
    }
    return children;
  };

  const throwError = (message) => {
    setError(new Error(message));
  };

  return { ErrorBoundary, throwError };
};

export default useErrorBoundary;
