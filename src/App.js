import React from 'react';
import logo from './logo.svg';
import './App.css';
import LineGraph from './components/carbon/LineGraph'
import DonutGraph from './components/carbon/DonutChart'
import BarChart from './components/d3/BarChart'

const addColSize = (componentName) => {
  return(
    <div class="row py-5">
    <div class='col'></div>
    <div class='col'>{componentName}</div>
    <div class='col'></div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div>
        <h1 class='py-5'>D3 Demo</h1>
        <div>
          <h2>Carbon D3 Line Chart</h2>
          {addColSize(<LineGraph/>)}
        </div>
        <div>
          <h2>Carbon D3 Donut Chart</h2>
          {addColSize(<DonutGraph/>)}
        </div>
        <h2>D3.js BarChart</h2>
       {addColSize(<BarChart/>)}
      </div>
    </div>
  );
}

export default App;
