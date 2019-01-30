import { popularMovies } from 'utils/endpoints'

export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'

export const requestMovies = (page) => {
  return {
    type: REQUEST_MOVIES,
    page
  }
}

export const receiveMovies = (json) => {
  return {
    type: RECEIVE_MOVIES,
    movies: json
  }
}

export const fetchMovies = (page=1) => {
  return dispatch => {
    dispatch(requestMovies(page))
    return fetch(popularMovies(page))
      .then(response => response.json())
      .then(json => dispatch(receiveMovies(json)))
  }
}