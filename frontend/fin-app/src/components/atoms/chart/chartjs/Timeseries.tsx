import React from 'react'
import { Scatter } from 'react-chartjs-2';


interface Point {
  x: Date
  y: number
}

export type Points = Point[]

export interface Props {
  points: Points,
  label: string,
}

const scatterData = (points: Points, label: string) => {
  return {
    datasets: [
      {
        label: label,
        fill: true,
        showLine: true,
        backgroundColor: 'rgba(75,192,192,0.4)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 1,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 1,
        data: points,
      }
    ]
  }
}


const options = () => {
  return {
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          unit: 'day',
          stepSize: 15,
          displayFormats: {
            day: 'YYYY/MM/DD'
          },
        },
      }]
    }
  }
}


// export const ScatterChart: React.FC<Props> = props => {
//   return (
//     <StyledChart>
//       <Scatter data={scatterData(props.points)} redraw />
//     </StyledChart>
//   )
// }
export class TimeseriesChart extends React.Component<Props> {

  render() {
    return (
      <div>
        <Scatter
          data={ scatterData(this.props.points, this.props.label) }
          options={ options() }
          redraw 
        />
      </div>
    )
  }

}