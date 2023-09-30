import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Chart.css"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const BarCharts = () => {
  // UseState Use ......

  const [dataChart, setDataChart] = useState();
    console.log(dataChart);
  // UseEffect use ......

  useEffect(() => {
    axios
      .get("http://localhost:5000/product")
      .then((res) =>{
        const ChartData = res?.data?.map(data=>{
          const SingleData ={
            Country: data?.country,
            Intensity: data?.intensity
          }
          return SingleData
        })   
        
        setDataChart(ChartData)  
          
    
      })
      .catch((error) =>{
        console.log(error.message);
      });
  }, [dataChart]);

  return (
    <BarChart width={1000} height={400}  data={dataChart}>
      <Bar  dataKey="Intensity"  fill="#8884d8" />
      <XAxis dataKey="Country"  />
      <YAxis dataKey="Intensity"  />
      <Legend />
      <Tooltip />
    </BarChart>
  );
};

export default BarCharts;
