import apiClient from './apiClient';
import apiUrl from 'utils/apis';

export const fetchMainData = async () => {
  const response = await apiClient.get(apiUrl.mainData);
  return response.data;
};
