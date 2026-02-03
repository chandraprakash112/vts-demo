import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

const DynamicChart = ({ type, data, options }) => {
  switch (type) {
    case "line":
      return <Line key={type} data={data} options={options} />;

    case "pie":
      return <Pie key={type} data={data} options={options} />;

    case "doughnut":
      return <Doughnut key={type} data={data} options={options} />;

    case "bar":
    default:
      return <Bar key={type} data={data} options={options} />;
  }
};

export default DynamicChart;
