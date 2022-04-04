import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {

    const [data,setData]=useState([])
    useEffect(()=>{
fetch('data.json')
.then(res=>res.json())
.then(data=>setData(data))


    },[])
    return (
        <div className='grid md:grid-cols-2 ml-24 mt-16'>

{/* Chart Type:ComposedChartWithAxisLabels */}
            <div>
            <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
        </ComposedChart>
            </div>

{/* Chart Type:BiaxialBarChart */}
            
            <div>
            <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="investment" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" />
        </BarChart>
            </div>


            {/* Chart Type:StackedAreaChart */}
            <div>
            <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sell" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
            </div>



            {/* Chart Type:StraightAnglePieChart */}
            <div>
            <PieChart width={400} height={400}>
          <Pie
            dataKey="revenue"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip></Tooltip>
        </PieChart>
            </div>
            
        </div>
    );
};

export default Dashboard;