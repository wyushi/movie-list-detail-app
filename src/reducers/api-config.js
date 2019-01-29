import {
  REQUEST_API_CONFIG,
  RECEIVE_API_CONFIG
} from 'actions/api-config'

const apiConfig = (state={}, action) => {
  switch(action.type) {
    case REQUEST_API_CONFIG:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_API_CONFIG:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    default:
      return state
  }
}

export default apiConfig