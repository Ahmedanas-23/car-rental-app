import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3333', // your backend URL
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = token; // ✅ make sure it's just the token
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
