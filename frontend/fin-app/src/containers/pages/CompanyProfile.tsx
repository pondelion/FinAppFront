import React/*, { useState }*/ from 'react';
import { connect } from 'react-redux'
//import { useDispatch } from 'react-redux';
import { Dispatch } from "redux";
import { StockPriceChart } from '../organisms/StockPriceChart'
import { StockSelect } from '../organisms/StockSelect'
import { CompanyBasicDataTable } from '../organisms/CompanyBasicDataTable'
import { State } from '../../redux/states/State'
//import { CompanyProfileActions } from '../../redux/actions/CompanyProfileActions'


interface ValueProps {
  ticker: number
}

interface CompanyProfileHandler {
  handleOnSelectStock: (event: any) => void
}

type Props =  ValueProps & CompanyProfileHandler

class CompanyProfile extends React.Component<Props> {

  //const dispatch = useDispatch()
  // const [ticker, /*setTicker*/] = useState<number>(7203)
  render() {
    return (
      <div>
        <StockSelect onChange={ this.props.handleOnSelectStock }/>
        <StockPriceChart ticker={ this.props.ticker } />
        <CompanyBasicDataTable ticker={ this.props.ticker } />
      </div>
    )
  }
}

interface IStateToProps {

}

const mapStateToProps = (state: State): ValueProps => {
  console.log(state)
  return {
      ticker: state.companyProfileState.selectedStock
  }
}

const mapDispatchToProps = (dispatch: Dispatch): CompanyProfileHandler => {
  return {
    handleOnSelectStock: (event: any) => { console.log(event.target.value)/*dispatch(CompanyProfileActions.stockSelected(event))*/ }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile)
