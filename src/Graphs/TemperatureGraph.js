import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styles from './TemperatureGraph.module.css';

const data = [
  // Add your temperature data here, formatted as below
  { time: '10:00', temperature: 72 },
  { time: '11:00', temperature: 74 },
  { time: '12:00', temperature: 76 },
  // ...
];

const TemperatureGraph = () => {
  return (
    <div className={styles['office-temperature-graph']}>
      <h3>Office Temperature</h3>
      <LineChart width={480} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default TemperatureGraph;
