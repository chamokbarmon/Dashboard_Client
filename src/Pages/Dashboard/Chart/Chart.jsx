import React, { useState } from "react";
import BarChart from "./BarCharts";
import PieCharts from "./PieCharts";

function Chart() {
  return (
    <div>
      <BarChart />
      <PieCharts/>
    </div>
  );
}

export default Chart;
