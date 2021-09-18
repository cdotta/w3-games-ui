import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_API_URL || 'http://localhost:1337',
});

export default axiosInstance;
