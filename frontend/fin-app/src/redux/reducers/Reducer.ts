import { combineReducers } from 'redux'
import { CompanyProfileReducer } from './CompanyProfileReducer'


export const reducers = combineReducers({
  companyProfileReducer: CompanyProfileReducer,
  //anotherReducer: AnotherReducer
})