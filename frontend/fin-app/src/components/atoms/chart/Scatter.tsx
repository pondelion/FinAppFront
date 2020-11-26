import React from 'react'
import { Scatter } from 'react-chartjs-2';
import styled from 'styled-components';


const StyledChart = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
`

interface Point {
  x: number
  y: number
}

export type Points = Point[]

export interface Props {
  points: Points
}

const scatterData = (points: Points) => {
  return {
    labels: ['Scatter'],
    datasets: [
      {
        label: 'scatter',
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.4)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 1,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 5,
        data: points
        // data: [
        //   { x: 0, y: 0 },
        // ]
      }
    ]
  }
}


export const ScatterChart: React.FC<Props> = props => {
  return (
    <StyledChart>
      <Scatter data={scatterData(props.points)} redraw />
    </StyledChart>
  )
}
