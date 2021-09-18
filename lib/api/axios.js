import axiosBase from 'axios';

const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

export const getAccessToken = () => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

export const setAccessToken = (accessToken) => {
  return localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
};

const axiosInstance = axiosBase.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default axiosInstance;
