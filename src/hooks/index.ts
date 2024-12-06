import { useQuery } from 'react-query';
import { fetchMainData } from 'api';

export const useMainData = () => {
  return useQuery('mainData', fetchMainData);
};
