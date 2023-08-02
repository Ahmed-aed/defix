import { useState, useEffect } from 'react';
import { ApiEndPointsValues } from '../models';

export function useCallApi<TResponse>(apiEndPoint: ApiEndPointsValues) {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<string>();
  const [data, setData] = useState<TResponse>();

  useEffect(() => {
    const callApi = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}${apiEndPoint}`
        );
        const data = await response.json();
        setData(data?.data);
      } catch (error) {
        setError(error?.message);
      } finally {
        setIsLoading(false);
      }
    };
    callApi();
  }, []);

  return {
    isLoading,
    error,
    data,
  };
}
