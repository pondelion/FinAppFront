import React from 'react'
import { 
  TimeseriesChart,
  Points
} from '../../components/atoms/chart/chartjs/Timeseries'
import { APIClient } from '../../utils/APIClient'
//import { StockPriceData } from '../../types/Stock'
import { StyledStockPriceChart } from '../../styles/Styles'


export interface Props {
  ticker: number
}

// export const StockPriceChart: React.FC<Props> = props => {
//   return (
//     <div>
//       <ScatterChart points={ getStockPriceData(props.ticker) } />
//     </div>
//   )
// }
export class StockPriceChart extends React.Component<Props> {

  private stockPriceData: Points = []

  constructor(props: Props) {
    super(props);

    this.getStockPriceData(this.props.ticker)
  }

  getStockPriceData(ticker: number): void {
    APIClient.getStockPriceData(
      ticker,
      (dates: string[], stockPrices: number[]): void => {
        let formattedData: Points = []
        for (let i=0; i < dates.length; i++) {
          formattedData.push({
            x: new Date(dates[i]),
            y: stockPrices[i]
          })
        }
        this.stockPriceData = formattedData
        console.log(this.stockPriceData)
        this.forceUpdate()
      },
      2020
    ) 
  }

  render() {
    return (
      <div>
        <StyledStockPriceChart>
          <TimeseriesChart
            points={ this.stockPriceData } 
            label={ `${this.props.ticker} stock price` }
          />
        </StyledStockPriceChart>
      </div>
    )
  }

}
