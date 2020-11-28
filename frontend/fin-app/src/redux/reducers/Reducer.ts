import { combineReducers } from 'redux'
import { CompanyProfileReducer } from './CompanyProfileReducer'


export const reducers = combineReducers({
  companyProfileState: CompanyProfileReducer,
  //anotherReducer: AnotherReducer
})