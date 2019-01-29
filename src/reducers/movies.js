import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES
} from 'actions/movies'

const movies = (state={
  isFetching: false,
  results: []
}, action) => {
  switch(action.type) {
    case REQUEST_MOVIES:
      return {
        ...state,
        isFetching: true,
        results: []
      }
    case RECEIVE_MOVIES:
      return {
        ...state,
        isFetching: false,
        ...action.movies
      }
    default:
      return state
  }
}

export default movies