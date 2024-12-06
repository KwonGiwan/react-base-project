import axios from 'axios';

export const getToken = () => {
  const accessToken = sessionStorage.getItem('accessToken');
  const config = {
    headers: { Authorization: `Bearer ${accessToken}` },
    withCredentials: true,
  };
  return config;
};

type getTokenWithHeaderType = {
  contentType: string;
};

export const getTokenWithHeader = ({ contentType }: getTokenWithHeaderType) => {
  const accessToken = sessionStorage.getItem('accessToken');
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': contentType,
    },
    withCredentials: true,
  };
  return config;
};

export const setToken = () => {
  const accessToken = sessionStorage.getItem('accessToken');
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  axios.defaults.withCredentials = true;
};
