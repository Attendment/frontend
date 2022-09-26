import axios from 'axios';

import authHeader from './auth-header';
import AuthService from './auth.util';

const BASE_API_URL = 'http://localhost:8000/api/v1/';

const axios_instance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  //withCredentials: true,
});

axios_instance.interceptors.request.use(
  (config) => {
    config.headers = { ...config.headers, ...authHeader() };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios_instance;
