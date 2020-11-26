import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { initialState } from '../states/CompanyProfileState'
import { CompanyProfileActions } from '../actions/CompanyProfileActions'


export const CompanyProfileReducer = reducerWithInitialState(initialState)
  .case(CompanyProfileActions.STOCK_SELECTED, (state, payload) => {
    return {
      ...state, ...payload.toString,
    }
  })