import { TOKEN_TYPE } from '../config/appConstants';
import axiosInstance from '../config/axiosConfig';

const API_AUTH_URL = `${process.env.REACT_APP_API_BASE_URL}/auth`;

const mobileSignupSignin = async (mobile) => {
  // try {
  const response = await axiosInstance.post(`${API_AUTH_URL}/mobile`, {
    mobile,
  });

  return response.data;
  // } catch (error) {
  //   console.log(error);
  //   throw error; // throw error directly as it is already coming as new Error() which has message property, it can directly be consumed by provider using error.message
  // }
};

const verifyMobileOtp = async (otp) => {
  const response = await axiosInstance.post(
    `${API_AUTH_URL}/verify-otp`,
    { otp },
    { requiredAuthType: TOKEN_TYPE.MOBILE_VERIFICATION }
  );
  return response.data;
};

const resendOtp = async (mobile) => {
  const response = await axiosInstance.get(`${API_AUTH_URL}/resend-otp`, {
    requiredAuthType: TOKEN_TYPE.MOBILE_VERIFICATION,
    params: { mobile },
  });
  return response.data;
};

const logout = async () => {
  await axiosInstance.get(`${API_AUTH_URL}/logout`, {
    requiredAuthType: TOKEN_TYPE.AUTH,
  });
};

const authService = {
  mobileSignupSignin,
  verifyMobileOtp,
  logout,
  resendOtp,
};

export default authService;
