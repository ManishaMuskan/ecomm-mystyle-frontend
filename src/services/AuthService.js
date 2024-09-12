import axios from 'axios';

const API_AUTH_URL = `${process.env.REACT_APP_API_BASE_URL}/auth`;

const mobileSignupSignin = async (mobile) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${API_AUTH_URL}/mobile`,
      data: {
        mobile,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message || 'Something went wrong!');
  }
};

const verifyMobileOtp = async (otp, mobileVerificationToken) => {
  try {
    const response = await axios({
      method: 'post',
      url: `${API_AUTH_URL}/verify-otp`,
      data: {
        otp,
      },
      headers: {
        Authorization: `Bearer ${mobileVerificationToken}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message || 'Something went wrong!');
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
