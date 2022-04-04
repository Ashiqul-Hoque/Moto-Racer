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
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="chart-container">
      <div className="mx-auto">
        <AreaChart
          width={600}
          height={410}
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
            stroke="#D4E157 "
            fill="#FFFF00"
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
          <Bar dataKey="sell" fill="#4DB6AC" />
          <Bar dataKey="investment" fill="#3399FF" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
