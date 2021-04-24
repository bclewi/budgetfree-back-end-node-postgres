import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

export default function BudgetMonthSummary() {

  return (
    <Paper>
      <Doughnut data={data} />
    </Paper>
  );

}
