import React, { use } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const Axios = ({axiosPromise}) => {
  const useData = use(axiosPromise);
  const axiosAllData = useData.data;
//  console.log(axiosAllData)

    return (
        <div>
            <h1 className='text-center my-5'>Axios Data Load Systerm.</h1>
           <div className='flex justify-center'>
            <LineChart width={400} height={300} data={axiosAllData}>
                <CartesianGrid strokeDasharray={'3 3'}></CartesianGrid>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line dataKey={'sales'} stroke='red'></Line>
                <Line dataKey={'expenses'} stroke='green'></Line>
                <Line dataKey={'profit'} stroke='blue'></Line>
            </LineChart>
           
           </div>
        </div>
    );
};

export default Axios;