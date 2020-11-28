import React from 'react'
import { Select, SelectHandler } from '../../components/atoms/Select'
import { APIClient } from '../../utils/APIClient'
import { Stock } from '../../types/Stock'


export interface StockSelectProps {}

type Props = StockSelectProps & SelectHandler

const getStockList = (): Stock[] => {
  const stockList: Stock[] = APIClient.getStockList() 
  return stockList
}

// export const StockSelect: React.FC<Props> = props => {
//   return (
//     <div>
//       <Select items={ getStockList().map(v => v.company_name) }/>
//     </div>
//   )
// }
export class StockSelect extends React.Component<Props> {

  render() {
    return (
      <div>
        <Select
          items={ getStockList().map(v => v.company_name) }
          onChange={ this.props.onChange }  
        />
      </div>
    )
  }

}