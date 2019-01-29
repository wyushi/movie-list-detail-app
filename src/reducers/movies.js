import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES
} from 'actions/movies'

const movies = (state={
  isFetching: false,
  page: 1,
  results: []
}, action) => {
  switch(action.type) {
    case REQUEST_MOVIES:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_MOVIES:
      return {
        isFetching: false,
        page: action.movies.page,
        results: [
          ...state.results,
          ...action.movies.results
        ]
      }
    default:
      return state
  }
}

export default movies