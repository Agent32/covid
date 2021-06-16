import { applyMiddleware, combineReducers, createStore } from 'redux'

import thunk from 'redux-thunk' //thunk middleware
import countryListReducer from './countryListReducer'

const reducersPush = combineReducers({
  countiesCovidPart: countryListReducer,
 
})

export type globalStateType = ReturnType<typeof reducersPush>

const store = createStore(reducersPush, applyMiddleware(thunk))
export default store
