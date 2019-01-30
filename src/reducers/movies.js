import {
  REQUEST_MOVIES,
  RECEIVE_MOVIES
} from 'actions/movies'

export const initialState = {
  isFetching: false,
  page: 1,
  results: [],
  error: null
}

const movies = (state=initialState, action) => {
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
    page: action.page, 
    error: null
  }
}

const handleReceiveMoviesAction = (state, action) => {
  if (!action.movies.results) {
    return {
      ...state,
      isFetching: false,
      error: {
        ...action.movies,
        message: JSON.stringify(action.movies)
      }
    }
  }

  const { page } = action.movies
  const results = page === 1 ?
    action.movies.results : [
      ...state.results,
      ...action.movies.results ]
  return {
    ...state,
    isFetching: false,
    page,
    results,
    error: null
  }
}

export default movies