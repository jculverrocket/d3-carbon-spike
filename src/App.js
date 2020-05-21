import React from 'react';
import logo from './logo.svg';
import './App.css';
import LineGraph from './components/LineGraph'
import DonutGraph from './components/DonutChart'

function App() {
  return (
    <div className="App">
      <div>
        <div class='pt-5'>D3 Demo</div>
        <div class="row pt-5">
          <div class="col">
            <LineGraph/>
          </div>
          <div class="col">
            One of three columns
          </div>
          <div class="col">
          <DonutGraph/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
