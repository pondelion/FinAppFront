import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StockPriceChart } from '../organisms/StockPriceChart'
import { StockSelect } from '../organisms/StockSelect'


type Props = {}

export const CompanyProfile: React.FC<Props> = props => {

  const dispatch = useDispatch()
  const [ticker, setTicker] = useState<number>(7203)

  return (
    <React.Component>
      <StockSelect />
      <StockPriceChart ticker={ ticker } />
    </React.Component>
  )
}
