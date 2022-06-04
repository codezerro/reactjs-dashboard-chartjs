import React,{useState,useEffect,useCallback} from 'react';
import Button from '../ui/Button';
import {barChartOptions,barChartData,monthsOptions} from './../data/data'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const m =  ['January','February','March', 'April', 'May', 'June', 'July','August','September','October','November','December']
export const d1 = [10,200,111,154,99,21,141,200,111,154,10,200]
export const d2 = [15,190,100,164,159,11,150,190,100,164,159,177]

const TestChart = () => {
  // useState
  let val = 0;
  const [minVal,setMinVal] = useState(0);
  const [maxVal,setMaxVal] = useState(11);
  const [mSelected,setmSelected] = useState(0);
  const [months,setMonths] = useState(['January','February','March', 'April', 'May', 'June', 'July','August','September','October','November','December']);
  const [dataOne,setDataOne] = useState([10,200,111,154,99,21,141,200,111,154,10,200]);
  const [dataTwo,setDataTwo] = useState([15,190,100,164,159,11,150,190,100,164,159,177]);

  // useEffect
  useEffect(()=>{
    barChartData.labels = Object.assign([],months);
    barChartData.datasets[0].data = Object.assign([],dataOne);
    barChartData.datasets[1].data =  Object.assign([],dataTwo);
  },[])


  // functions
  const popMonth = async(v,id) =>{
    v = v * 1;
    let mx,mn;

    if(id === 1){
      setMinVal(v);
      mx = maxVal;
      mn = v;
    }
    else if(id === 2 ){
      setMaxVal(v);
      mx = v;
      mn = minVal;
    }

    mn = Math.min(mn,mx);
    mx = Math.max(mn,mx);

    console.log(mn);
    console.log(mx);

    let newMonths = [];
    let newDataOne = [];
    let newDataTwo = [];

    barChartData.labels = [];
    barChartData.datasets[0].data = []
    barChartData.datasets[1].data = []
    
    for(var i = mn; i <= mx; i++){
      newMonths.push(m[i]);
      newDataOne.push(d1[i]);
      newDataTwo.push(d2[i]);
    }
    // newMonths.pop();
    
    setMonths(newMonths);
    setDataOne(newDataOne);
    setDataTwo(newDataTwo);
    
    
    // console.log('newMonths len : '+newMonths.length);
    barChartData.labels = Object.assign([],newMonths);
    barChartData.datasets[0].data = Object.assign([],newDataOne);
    barChartData.datasets[1].data = Object.assign([],newDataTwo);

    // barChartData.datasets[0].lebel = 

    newMonths.forEach((it)=>{
      console.log(it);
    })
    newDataOne.forEach((it)=>{
      console.log(it);
    })
    newDataTwo.forEach((it)=>{
      console.log(it);
    })

  }

  return (
    <div className=''>
      {/* button start */}
      <Button popMonth={popMonth} labels="Choose a Month"  mSelected={0} id={1} />
      <Button popMonth={popMonth} labels="Choose another Month" mSelected={11} id={2} />
      {/* button end */}
      <div className=''>
        <Bar options={barChartOptions} data={barChartData} height="300px" width="450px" />
      </div>
      <h1>length is : {months.length} </h1>
      <ul>
        {
          barChartData.datasets[0].data.map((a,i) => <li key={i}>{a}</li>)
        }
      </ul>
      <ul>
        {
          barChartData.datasets[1].data.map((a,i) => <li key={i}>{a}</li>)
        }
      </ul>
      <ul>
        {
          barChartData.labels.map((a,i) => <li key={i}>{a}</li>)
        }
      </ul>
      
      <h1>{minVal}</h1>
      <h1>{maxVal}</h1>
    </div>
    
  )
}

export default TestChart;

/*


    console.log('months before pop : '+months.length);
    let m = [...months];
    m.pop();
    console.log('m after pop : '+m.length);

    setMonths([...m,m]);
    console.log('months after pop and set : '+months.length);
    
    barChartData.labels = [...m];
    console.log('barChartData.labels len : '+barChartData.labels.length);

    console.log('m selected: '+val);

*/