import axios from 'axios';
import { AXIOS_REQUEST_TIMEOUT } from './appConstants';
import errorMessages from './errorResponseConstants';

class CustomError extends Error {
  constructor(message, data) {
    super(message);
    this.data = data;
  }
}

const getToken = (authType) => {
  let token;
  switch (authType) {
    case 'mobile-token': {
      token = localStorage.getItem('mobileVerificationToken');
      break;
    }
    case 'email-token': {
      token = localStorage.getItem('emailVerificationToken');
      break;
    }
    case 'auth-token': {
      token = localStorage.getItem('authToken');
      break;
    }
    case 'no-auth':
      token = '';
      break;
    default:
      token = '';
      break;
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
    const token = getToken(modifiedConfig.authType);

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
  (response) => response, // If successful, just return the response
  (error) => {
    if (error.response) {
      // TODO: Log to sentry for production server
      console.error(
        'Server Error:',
        error.response?.status,
        error.response?.data
      );

      if (
        error.response?.data?.message === 'jwt expired' ||
        error.response?.data?.message === 'jwt malformed'
      ) {
        throw new CustomError('Invalid or Expired token, login again!');
      }

      throw new CustomError(
        error.response?.data?.message || 'Something went wrong! Try later.',
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
      console.error('\nRequest config:', error.config);
      throw new CustomError(errorMessages.UNEXPECTED_ERROR);
    }
  }
);

export default axiosInstance;
