import React from 'react'
import { 
  ScatterChart,
  Points
} from '../../components/atoms/chart/Scatter'
import { APIClient } from '../../utils/APIClient'
import { StockPriceData } from '../../types/Stock'


export interface Props {
  ticker: number
}


const getStockPriceData = (ticker: number): Points => {
  const stockPriceData: StockPriceData = APIClient.getStockPriceData(ticker) 
  const formattedData: Points = stockPriceData.stock_price.map(
      (idx, price) => { return {'x': idx, 'y': price} }
  )
  return formattedData
}


export const StockPriceChart: React.FC<Props> = props => {
  return (
    <React.Component>
      <ScatterChart points={ getStockPriceData(props.ticker) } />
    </React.Component>
  )
}
