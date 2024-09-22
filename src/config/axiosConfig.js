import axios from 'axios';
import {
  AXIOS_REQUEST_TIMEOUT,
  SERVER_ERROR,
  CLIENT_CUSTOM_ERROR_TYPE,
  TOKEN_TYPE,
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
    case TOKEN_TYPE.MOBILE_VERIFICATION: {
      token = localStorage.getItem('mobileVerificationToken');
      break;
    }
    case TOKEN_TYPE.EMAIL_VERIFICATION: {
      token = localStorage.getItem('emailVerificationToken');
      break;
    }
    case TOKEN_TYPE.AUTH: {
      token = localStorage.getItem('authToken');
      break;
    }
    case TOKEN_TYPE.NONE:
      token = '';
      break;
    default:
      token = '';
      break;
  }

  // if token required and token not found, don't send request and throw error
  if (requiredAuthType && requiredAuthType !== TOKEN_TYPE.NONE && !token) {
    throw new CustomError(errorMessages.TOKEN_MISSING, {
      errorType: CLIENT_CUSTOM_ERROR_TYPE.TOKEN_MISSING,
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
        error.response?.data?.message === SERVER_ERROR.JWT_EXPIRED ||
        error.response?.data?.message === SERVER_ERROR.JWT_MALFORMED
      ) {
        // just to show a user friendly error message to
        throw new CustomError(errorMessages.TOKEN_INVALID, {
          errorType: CLIENT_CUSTOM_ERROR_TYPE.TOKEN_INVALID,
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
      if (
        Object.values(CLIENT_CUSTOM_ERROR_TYPE).includes(error.data?.errorType)
      ) {
        errorMessage = error.message;
        errorType = error.data?.errorType;
      }

      throw new CustomError(errorMessage, { errorType });
    }
  }
);

export default axiosInstance;
