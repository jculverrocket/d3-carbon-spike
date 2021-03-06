import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'

class BarChart extends Component {

   data=[5,10,1,3] 
   size=[500,500]

   constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }
   componentDidMount() {
      this.createBarChart()
   }
   componentDidUpdate() {
      this.createBarChart()
   }
   createBarChart() {
      const node = this.node
      const dataMax = max(this.data)
      const yScale = scaleLinear()
         .domain([0, dataMax])
         .range([0, this.size[1]])
   select(node)
      .selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
   
   select(node)
      .selectAll('rect')
      .data(this.data)
      .exit()
      .remove()
   
   select(node)
      .selectAll('rect')
      .data(this.data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * 25)
      .attr('y', d => this.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25)
   }
render() {
      return <svg ref={node => this.node = node}
      width={500} height={500}>
      </svg>
   }
}
export default BarChart