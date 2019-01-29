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
        page: action.page
      }
    case RECEIVE_MOVIES:
      const { page } = action.movies
      const results = page === 1 ?
        action.movies.results : [
          ...state.results,
          ...action.movies.results
        ]
      return {
        ...state,
        isFetching: false,
        page,
        results
      }
    default:
      return state
  }
}

export default movies