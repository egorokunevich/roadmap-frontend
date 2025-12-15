import axios from 'axios';
import { useEffect, useState } from 'react';
const apiUrl = import.meta.env.VITE_API_URL;

const PING_INTERVAL_IN_MINUTES = 5;

export const useConnectionService = () => {
  const [isServerAwake, setIsServerAwake] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const pingServer = async () => {
      const response = await axios.get(`${apiUrl}/ping`);
      if (response.status === 200) {
        setIsServerAwake(response.data.isAwake);
      } else {
        setIsError(true);
      }
    };

    pingServer();

    const intervalId = setInterval(
      pingServer,
      PING_INTERVAL_IN_MINUTES * 60 * 1000,
    ); // min to ms
    return () => clearInterval(intervalId);
  }, []);

  return { isServerAwake, isError };
};
