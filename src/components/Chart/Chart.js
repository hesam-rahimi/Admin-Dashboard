import React from "react";
import "./Chart.css"
import {
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from "recharts";
const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
          <Line dataKey={dataKey} stroke="#5550bd" type="monotone"/>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
