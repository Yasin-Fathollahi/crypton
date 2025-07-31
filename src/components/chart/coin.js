import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  // respons
};

export default function chart() {
  return (
    <Line
      data=""
      options={{
        responsive: true,
      }}
    />
  );
}
