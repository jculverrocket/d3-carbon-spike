import React from "react";
import ReactDOM from "react-dom";
import { DonutChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
// Or
// import "@carbon/charts/styles/styles.scss";


let state = {
	data: [
		{
			"group": "2V2N 9KYPM version 1",
			"value": 20000
		},
		{
			"group": "L22I P66EP L22I P66EP L22I P66EP",
			"value": 65000
		},
		{
			"group": "JQAI 2M4L1",
			"value": 75000
		},
		{
			"group": "J9DZ F37AP",
			"value": 1200
		},
		{
			"group": "YEL48 Q6XK YEL48",
			"value": 10000
		},
		{
			"group": "Misc",
			"value": 25000
		}
	],
	options: {
		"title": "Donut",
		"resizable": true,
		"donut": {
			"center": {
				"label": "Browsers"
			}
		},
		"height": "400px"
	}
	};


const DonutGraph = () => {
	return(
		<DonutChart
			data={state.data}
			options={state.options}
		/>
	)
}
  
export default DonutGraph;