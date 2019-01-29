export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'

const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3403673c3e3cf351c8741bda8180865e'

const requestMovies = (page) => {
  return {
    type: REQUEST_MOVIES,
    page
  }
}

const receiveMovies = (json) => {
  return {
    type: RECEIVE_MOVIES,
    movies: json,
    receivedAt: Date.now()
  }
}

export const fetchMovies = () => {
  return dispatch => {
    dispatch(requestMovies())
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveMovies(json)))
  }
}