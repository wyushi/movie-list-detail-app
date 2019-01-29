import { createStore } from 'redux'
import reducer from 'reducers/movies'

const store = createStore(reducer)

export default store