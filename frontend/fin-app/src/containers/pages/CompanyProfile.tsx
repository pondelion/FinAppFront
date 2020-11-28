import React/*, { useState }*/ from 'react';
import { connect } from 'react-redux'
//import { useDispatch } from 'react-redux';
import { Dispatch } from "redux";
import { StockPriceChart } from '../organisms/StockPriceChart'
import { StockSelect } from '../organisms/StockSelect'
import { State } from '../../redux/states/State'
//import { CompanyProfileActions } from '../../redux/actions/CompanyProfileActions'


interface ValueProps {
  ticker: number
}

interface CompanyProfileHandler {
  handleOnSelectStock: (event: any) => void
}

type Props =  ValueProps & CompanyProfileHandler

export class CompanyProfile extends React.Component<Props> {

  //const dispatch = useDispatch()
  // const [ticker, /*setTicker*/] = useState<number>(7203)
  render() {
    return (
      <div>
        <StockSelect onChange={ this.props.handleOnSelectStock }/>
        <StockPriceChart ticker={ this.props.ticker } />
      </div>
    )
  }
}

const mapStateToProps = (state: State) => {
  return {
      selectedStock: state.companyProfileState.selectedStock
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
  handleOnSelectStock: (event: any) => { console.log('handelew')/*dispatch(CompanyProfileActions.stockSelected(event))*/ }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile)
