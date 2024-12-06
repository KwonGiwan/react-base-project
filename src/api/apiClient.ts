import axios from 'axios';
const BASIC_URI = process.env.REACT_APP_BASIC_URI;

const apiClient = axios.create({
  baseURL: BASIC_URI,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터를 추가하여 토큰을 자동으로 포함
apiClient.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;
