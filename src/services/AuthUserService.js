import { TOKEN_TYPE } from '../config/appConstants';
import axiosInstance from '../config/axiosConfig';

const API_AUTH_USER_URL = `${process.env.REACT_APP_API_BASE_URL}/me`;

const getUserPublicProfile = async () => {
  const response = await axiosInstance.get(`${API_AUTH_USER_URL}/profile`, {
    requiredAuthType: TOKEN_TYPE.AUTH,
  });
  return response.data;
};

const authService = {
  getUserPublicProfile,
};

export default authService;
