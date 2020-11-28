import { createStore, /*applyMiddleware*/ } from 'redux'
//import thunk from "redux-thunk"
import { reducers } from './reducers/Reducer'


//const storeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || CompositionEvent;

export const store = createStore(
  reducers,
//  storeEnhancers(applyMiddleware(thunk))
)