export const ClientErrorType = {
  TOKEN_MISSING: 'CE_TOKEN_MISSING',
  TOKEN_INVALID: 'CE_TOKEN_INVALID',
};

export const ServerError = {
  JWT_EXPIRED: 'jwt expired',
  JWT_MALFORMED: 'jwt malformed',
};

export const TokenType = {
  NONE: 'NO_AUTH',
  MOBILE_VERIFICATION: 'MOBILE_TOKEN',
  EMAIL_VERIFICATION: 'EMAIL_VERIFICATION_TOKEN',
  AUTH: 'AUTH_TOKEN',
};

export const AXIOS_REQUEST_TIMEOUT = 5000;
export const NUMBER_OF_OTP_DIGITS = 4;
