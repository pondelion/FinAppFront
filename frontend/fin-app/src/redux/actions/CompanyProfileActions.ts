import { actionCreatorFactory } from 'typescript-fsa'
import { ActionType } from 'typesafe-actions'
//import { CompanyProfileState } from '../states/CompanyProfileState'


const actionCreator = actionCreatorFactory()

export const STOCK_SELECTED = 'STOCK_SELECTED';

export const CompanyProfileActions = {
  stockSelected: actionCreator<number>(STOCK_SELECTED)
}


export type ActionsType = ActionType<typeof CompanyProfileActions>