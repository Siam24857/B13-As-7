'use client'

import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { AuthContext } from '../context/AuthContext';



const Chart = () => {
     const { text,   call,   video, } = useContext(AuthContext);
    const data = [


   {  name: 'text', value: text.length,  fill: "#4e038c" },
  {  name:'Video', value: video.length, fill: "#10450d" },
  {  name:'Call',  value: call.length,  fill: "#19d10d" },
 
   
 
];


    return (
        <div className='flex justify-center '>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
     <Legend className='mt-10'></Legend>
     <Tooltip></Tooltip>
    </PieChart>
        </div>
    );
};

export default Chart;