import React from 'react'
import { Select } from '../../components/atoms/Select'
import { APIClient } from '../../utils/APIClient'
import { Stock } from '../../types/Stock'


export interface Props {}


const getStockList = (): Stock[] => {
  const stockList: Stock[] = APIClient.getStockList() 
  return stockList
}

export const StockSelect: React.FC<Props> = props => {
  return (
    <React.Component>
      <Select items={ getStockList().map(v => v.company_name) }/>
    </React.Component>
  )
}
