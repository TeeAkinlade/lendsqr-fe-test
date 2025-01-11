import { Bar } from "react-chartjs-2";
import styles from '../pages/Dashboard/Dashboard.module.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Barchart() {
  const labels: string[] = ["Acitive", "Inactive", "Blaclisted", "Due", "Discount"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Transaction",
        data: [150, 80, 78, 121, 79],
        backgroundColor: [
            "rgba(255, 99, 132)",
            "rgba(233, 178, 0, 1)",
            "rgba(57, 205, 204, 1)",
            "rgba(223, 24, 255, 1)",
            'rgba(54, 162, 235)',
        ],
        borderWidth: 1,
        borderRadius: {
          topLeft: Number.MAX_VALUE,
          topRight: Number.MAX_VALUE,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: "bottom" as const,
        maxBarThickness: 50,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className={styles.barchart}>
        <p>User Metrics</p>
      <Bar data={data} options={options} />
    </div>
  );
}
