import axios from 'axios';

const BASE_API_URL = 'http://localhost:8000/api/v1/';

const axios_instance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
});

export default axios_instance;
