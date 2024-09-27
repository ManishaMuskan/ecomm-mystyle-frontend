'use client';

import { ErrorBoundary } from 'react-error-boundary';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function defaultFallbackRender({ error, resetErrorBoundary }) {
  return (
    <div
      role="alert"
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '16px',
      }}>
      <h1>Something went wrong, Please try again!</h1>

      {process.env.NODE_ENV === 'development' && (
        <pre style={{ color: 'red' }}>{error.message}</pre>
      )}

      <button type="button" onClick={resetErrorBoundary} aria-label="reload">
        <span>retry</span>
        <FontAwesomeIcon
          icon={faRotateRight}
          style={{
            verticalAlign: 'middle',
            fontSize: '10px',
            display: 'inline-block',
            paddingLeft: '5px',
          }}
        />
      </button>
    </div>
  );
}

const logError = (error, info) => {
  // Do something with the error, e.g. log to an external API
  console.log(error, info);
};

const ErrorBoundaryWrapper = ({
  children,
  FallbackComponent = defaultFallbackRender,
  onReset,
}) => {
  return (
    <ErrorBoundary
      FallbackComponent={FallbackComponent}
      onReset={(details) => {
        console.log('Details', details);
        if (onReset) {
          onReset();
        } else {
          // Default reset behavior could be navigating to a safe route, for example:
          // navigate('/');
        }
      }}
      onError={logError}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryWrapper;
