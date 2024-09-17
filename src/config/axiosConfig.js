import axios from 'axios';
import {
  AXIOS_REQUEST_TIMEOUT,
  ServerError,
  ClientErrorType,
  TokenType,
} from './appConstants';
import errorMessages from './errorResponseConstants';

class CustomError extends Error {
  constructor(message, data) {
    super(message);
    this.data = data;
  }
}

const getToken = (requiredAuthType) => {
  let token;
  switch (requiredAuthType) {
    case TokenType.MOBILE_VERIFICATION: {
      token = localStorage.getItem('mobileVerificationToken');
      break;
    }
    case TokenType.EMAIL_VERIFICATION: {
      token = localStorage.getItem('emailVerificationToken');
      break;
    }
    case TokenType.AUTH: {
      token = localStorage.getItem('authToken');
      break;
    }
    case TokenType.NONE:
      token = '';
      break;
    default:
      token = '';
      break;
  }

  // if token required and token not found, don't send request and throw error
  if (requiredAuthType && requiredAuthType !== TokenType.NONE && !token) {
    throw new CustomError(errorMessages.TOKEN_MISSING, {
      errorType: ClientErrorType.TOKEN_MISSING,
    });
  }

  return token;
};

const axiosInstance = axios.create({
  timeout: AXIOS_REQUEST_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const modifiedConfig = { ...config };

    const token = getToken(modifiedConfig.requiredAuthType);

    if (token) {
      modifiedConfig.headers.Authorization = `Bearer ${token}`;
    }

    return modifiedConfig;
  },
  (error) => {
    throw new Error(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log(response);
    return response;
  }, // If successful, just return the response
  (error) => {
    if (error.response) {
      // TODO: Log to sentry for production server
      console.error(
        'Server Error:',
        error.response?.status,
        error.response?.data
      );

      if (
        error.response?.data?.message === ServerError.JWT_EXPIRED ||
        error.response?.data?.message === ServerError.JWT_MALFORMED
      ) {
        // just to show a user friendly error message to
        throw new CustomError(errorMessages.TOKEN_INVALID, {
          errorType: ClientErrorType.TOKEN_INVALID,
        });
      }

      throw new CustomError(
        error.response?.data?.message || errorMessages.SOMETHING_WRONG,
        error.response?.data
      );
    } else if (error.request) {
      // No response from the server
      console.error(
        'No response from the server, Network Error:',
        error.request
      );
      throw new CustomError(errorMessages.NETWORK_ERROR_TRY_AGAIN);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);

      let errorMessage = errorMessages.UNEXPECTED_ERROR;
      let errorType;
      if (Object.values(ClientErrorType).includes(error.data?.errorType)) {
        errorMessage = error.message;
        errorType = error.data?.errorType;
      }

      throw new CustomError(errorMessage, { errorType });
    }
  }
);

export default axiosInstance;
