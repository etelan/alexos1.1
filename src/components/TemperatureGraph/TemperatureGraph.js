import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styles from '../../componentStyles/TemperatureGraph.module.css';
import '../../componentStyles/colours.css'

const data = [
  { time: '10:00', temperature: 30 },
  { time: '10:10', temperature: 30 },
  { time: '10:20', temperature: 30 },

  { time: '10:30', temperature: 30 },
  { time: '10:40', temperature: 30 },
  { time: '10:50', temperature: 30 },
  { time: '10:56', temperature: 30 },

];


const TemperatureGraph = () => {
  return (
    <div className={styles['office-temperature-graph']}>
      <h3>Office Temperature °C</h3>
      <LineChart width={480} height={420} data={data} style={{fontSize:'30px'}}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" dy={10}/>
        <YAxis/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="var(--temperature-graph)" activeDot={{ r: 8 } } />
      </LineChart>
    </div>
  );
};

export default TemperatureGraph;
