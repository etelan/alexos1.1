import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styles from '../../componentStyles/TemperatureGraph.module.css';
import '../../componentStyles/colours.css'

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
      <LineChart width={480} height={420} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis dy={-10}/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="var(--temperature-graph)" activeDot={{ r: 8 } } />
      </LineChart>
    </div>
  );
};

export default TemperatureGraph;
