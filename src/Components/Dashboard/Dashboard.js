import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  Line,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  return (
    <div className="chart-container">
      <div className="mx-auto">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#9900FF"
            fill="#9850FF"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#009999"
            fill="#009999"
          />

          <Area
            type="monotone"
            dataKey="sell"
            stroke="#FFD54F"
            fill="#FFD54F"
          />
        </AreaChart>
      </div>

      <div className="mx-auto">
        <BarChart
          width={600}
          height={420}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="investment" />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
          <Bar dataKey="sell" fill="#82ca9d" />
          <Bar dataKey="investment" fill="#3399FF" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
