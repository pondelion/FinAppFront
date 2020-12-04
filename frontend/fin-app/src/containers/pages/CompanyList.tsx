import React/*, { useState }*/ from 'react';
import { connect } from 'react-redux'
//import { useDispatch } from 'react-redux';
import { Dispatch } from "redux";
import { SearchBar } from '../../components/atoms/SearchBar'
import { StockListTab } from '../organisms/StockListTab'
import { State } from '../../redux/states/State'
import { StyledStockListTab } from '../../styles/Styles'
//import { CompanyProfileActions } from '../../redux/actions/CompanyProfileActions'


interface CompanyListProps {
}

interface CompanyListHandler {
  handleOnSearch: () => void
}

type Props =  CompanyListProps & CompanyListHandler

class CompanyList extends React.Component<Props> {

  //const dispatch = useDispatch()
  // const [ticker, /*setTicker*/] = useState<number>(7203)
  render() {
    return (
      <div>
        <SearchBar 
          onRequestSearch={ this.props.handleOnSearch }
          placeholder={ '企業名' }
        />
        <StyledStockListTab>
          <StockListTab />
        </StyledStockListTab>
      </div>
    )
  }
}

interface IStateToProps {

}

const mapStateToProps = (state: State): CompanyListProps => {
  console.log(state)
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch): CompanyListHandler => {
  return {
    handleOnSearch: () => { console.log('onRequestSearch')/*dispatch(CompanyProfileActions.stockSelected(event))*/ }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)
