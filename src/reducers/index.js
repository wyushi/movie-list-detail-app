import { combineReducers } from 'redux'

import apiConfig from './api-config'
import movies from './movies'

const rootReducer = combineReducers({
  apiConfig,
  movies
})

export default rootReducer