import { useState, useEffect } from 'react';

const useDataFetching = (url, interval = 10000) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(); // Fetch data initially

    const timer = setInterval(fetchData, interval);

    return () => {
      clearInterval(timer); // Clean up the timer on component unmount
    };
  }, [url, interval]);

  return { data, isLoading, error };
};

export default useDataFetching;
