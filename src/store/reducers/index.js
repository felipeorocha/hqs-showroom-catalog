import { combineReducers } from 'redux'
import charactersReducer from './charactersReducer'

const rootReducer = combineReducers({
  app: charactersReducer,
})

export default rootReducer
