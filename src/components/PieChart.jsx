import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Piedata2  } from './../data';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  maintainAspectRatio: true,
  responsive: false,
};


const PieChart = () => {
  
  return (
    <div className=''
      style={{ 
        display:'flex',
        // justifyContent:'center',
        // alignItems:'center',
        // height:'100vh',
        // width:'100vw',
      }}
    >
      <Pie data={Piedata2} options={options} height="400px" width="400px" />
    </div>
  )
}

export default PieChart