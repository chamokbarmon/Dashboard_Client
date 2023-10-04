import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
const PieCharts = () => {
  const [dataChart, setDataChart] = useState();
  console.log(dataChart);
  // UseEffect use ......

  useEffect(() => {
    axios
      .get("https://dashboard-server-theta.vercel.app/product")
      .then((res) => {
        const ChartData = res?.data?.map((data) => {
         
          const SingleData = {
            Country: data?.country,
            Intensity: data?.intensity,
            Topic:data?.topic,
            Likelihood:data?.likelihood
          };
          return SingleData;
        });
        setDataChart(ChartData);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [dataChart]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <ComposedChart
    width={1000}
    height={400}
    data={dataChart}
    margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    }}
  >
    <CartesianGrid stroke="#f5f5f5" />
    <XAxis dataKey="Country"  />
      <YAxis dataKey="Intensity"  />
    <Tooltip />
    <Legend />
    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
    <Bar data={dataChart} dataKey="Topic" barSize={20} fill="#413ea0" />
    <Line type="monotone"  dataKey="Intensity" stroke="#ff7300" />
    <Line dataKey="Likelihood" />
  </ComposedChart>
  );
};

export default PieCharts;
