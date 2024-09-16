import axios from 'axios';
// import handleAsyncError from '../AsyncErrorHandler';
import axiosInstance from '../config/axiosConfig';

const API_AUTH_URL = `${process.env.REACT_APP_API_BASE_URL}/auth`;

const mobileSignupSignin = async (mobile) => {
  try {
    const response = await axiosInstance.post(`${API_AUTH_URL}/mobile`, {
      mobile,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const verifyMobileOtp = async (otp) => {
  try {
    const response = await axiosInstance.post(
      `${API_AUTH_URL}/verify-otp`,
      { otp },
      { authType: 'mobile-token' }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const logout = () => {
  return axios.post(`${API_AUTH_URL}/logout`);
};

const authService = {
  mobileSignupSignin,
  verifyMobileOtp,
  logout,
};

export default authService;
