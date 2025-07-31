'use client';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

export default function Chart({ prices, changePercentage }) {
  console.log(changePercentage);

  const isRising = changePercentage > 0;
  const { borderColor, backgroundColor } = isRising
    ? {
        borderColor: 'rgb(0, 166, 62)',
        // backgroundColor: 'rgba(0, 166, 62, 50)',
      }
    : {
        borderColor: 'rgb(231, 0, 11)',
        // backgroundColor: 'rgba(231, 0, 11, 0.5)',
      };
  const labels = prices.map(() => '');

  const limitedPrices = prices.filter((p, index) => index % 5 === 0);
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: prices,
        borderColor,
        backgroundColor,
        pointRadius: 1,
      },
    ],
  };
  return (
    <Line
      data={data}
      options={{
        layout: { padding: 0 },
        scales: {
          y: { display: false },
          x: { display: false },
        },

        maintainAspectRatio: false,
        responsive: true,
      }}
      className="text-red-600"
    />
  );
}
