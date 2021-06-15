import { applyMiddleware, combineReducers, createStore } from 'redux'

import thunk from 'redux-thunk' //thunk middleware
import countryListReducer from './countryListReducer'
import { reducer as formReducer } from 'redux-form'

const reducersPush = combineReducers({
  countiesCovidPart: countryListReducer,
  form: formReducer,
})

export type globalStateType = ReturnType<typeof reducersPush>

const store = createStore(reducersPush, applyMiddleware(thunk))
export default store
