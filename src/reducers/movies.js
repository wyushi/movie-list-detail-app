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
      return handleRequestMoviesAction(state, action)
    case RECEIVE_MOVIES:
      return handleReceiveMoviesAction(state, action)
    default:
      return state
  }
}

const handleRequestMoviesAction = (state, action) => {
  return {
    ...state,
    isFetching: true,
    page: action.page
  }
}

const handleReceiveMoviesAction = (state, action) => {
  const { page, error } = action.movies
  const results = page === 1 ?
    action.movies.results : [
      ...state.results,
      ...action.movies.results
    ]
  return {
    ...state,
    isFetching: false,
    page,
    results,
    error
  }
}

export default movies