import React from 'react';
import useDataFetching from './useDataFecthing';
const Thermometer = () => {
  const { data, isLoading, error } = useDataFetching('http://192.168.4.116:8000', 10000);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null;
  }
  
  let formattedString = '';
       
  for (let [key, value] of Object.entries(data)) {
    formattedString += key + " " + value + "°C\n"
  }

  // Render your component with the fetched data
  return (
    <div>
      <pre>{formattedString}</pre>
    </div>
  );
};

export default Thermometer;
