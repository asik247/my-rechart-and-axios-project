import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 200, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 278, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 189, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 239, pv: 3800, amt: 2500 },
];

const ReChart = () => {
  return (

    <div >
      <h1 className='text-center my-4'>Not Daynamic load systerm.</h1>
      <div className="flex justify-center">
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="name" />
        <YAxis />                      {/* YAxis শুধু রাখলেই যথেষ্ট */}
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="red" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </div>
    </div>
  );
};

export default ReChart;
