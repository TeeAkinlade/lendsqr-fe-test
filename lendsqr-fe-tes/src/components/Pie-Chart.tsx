import { Pie } from "react-chartjs-2";
import styles from '../pages/Dashboard/Dashboard.module.scss'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, ArcElement, Tooltip, Legend, ChartDataLabels);

const Piechart: React.FC = () => {
  const data = {
    labels: ["Active User", "BlackListed User"],
    datasets: [
      {
        data: [74, 36],
        backgroundColor: ["rgba(0, 128, 0, 1)", "rgba(228, 3, 59, 1)"],
        hoverOffset: 4,
      },
    ],
  };

  const options: ChartOptions<"pie"> = {
    plugins: {
      legend: {
        display:false
      },
      datalabels: {
        color: "#fff",
        font: {
          size: 16,
          weight: "bold",
        },
        formatter: (value: number) => `${value}%`,
      },
      tooltip: {
        enabled: false,
      },
    },
    responsive: true,
  };

  return (
    <div className={styles.pieContainer}>
      <div className={styles.piechart}>
          <p className={styles.user}>Users</p>
          <div className={styles.Ulables}>
            <div className={styles.Ucontainer}>
              <div className={styles.Ulabel}>
                <div className={styles.Ucolor} />
                <p className={styles.Utitle}>Active Users</p>
              </div>
              <div className={styles.Ulabel}>
                <div className={styles.Ucolor2} />
                <p className={styles.Utitle}>Blacklisted Users</p>
              </div>
          </div>
       </div>
       <div className={styles.pie}>
          <Pie data={data} options={options} />
       </div>
      </div>
      <div className={styles.lables}>
        <div className={styles.container}>
          <div className={styles.label}>
            <div className={styles.color} />
            <p className={styles.title}>Active Users</p>
          </div>
          <div className={styles.label}>
            <div className={styles.color2} />
            <p className={styles.title}>Blacklisted Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piechart;
