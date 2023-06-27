import React from 'react';
import useDataFetching from './useDataFecthing';

const Thermometer = () => {
  const { data, isLoading, error } = useDataFetching('https://www.york.ac.uk/teaching/cws/wws/webpage1.html', 10000);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null;
  }

  // Render your component with the fetched data
  return (
    <div>
      <h1>Data fetched:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Thermometer;
