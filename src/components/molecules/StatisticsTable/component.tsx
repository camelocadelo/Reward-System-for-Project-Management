import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Line } from 'recharts';
// import { data } from './consts';
import { StatisticsTableProps } from './types';

function StatisticsTable(props: StatisticsTableProps): JSX.Element {
  const { data } = props;
  return (
    <div>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="camelocadelo1" stroke="#8884d8" />
        <Line type="monotone" dataKey="lenakuka" stroke="#82ca9d" />
        <Line type="monotone" dataKey="mmfrxx" stroke="red" />
      </LineChart>
    </div>
  );
}

export default StatisticsTable;
