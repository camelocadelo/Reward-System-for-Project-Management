import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Line } from 'recharts';
import { strokeColors } from './consts';
import { StatisticsTableProps } from './types';

function StatisticsTable(props: StatisticsTableProps): JSX.Element {
  const { data, members } = props;
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
        {members.map((m, i) => (
          <Line key={m} type="monotone" dataKey={m} stroke={strokeColors[i]} />
        ))}
      </LineChart>
    </div>
  );
}

export default StatisticsTable;
