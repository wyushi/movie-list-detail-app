export const REQUEST_API_CONFIG = 'REQUEST_API_CONFIG'
export const RECEIVE_API_CONFIG = 'RECEIVE_API_CONFIG'

const requestAPIConfig = () => {
  return {
    type: REQUEST_API_CONFIG
  }
}

const receiveAPIConfig = (json) => {
  return {
    type: RECEIVE_API_CONFIG,
    apiConfig: json,
    receivedAt: Date.now()
  }
}

export const fetchAPIConfig = () => {
  return dispatch => {
    dispatch(requestAPIConfig())
    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveAPIConfig(json)))
  }
}