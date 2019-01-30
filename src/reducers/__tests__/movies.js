import moives, { initialState } from '../movies'
import { requestMovies, receiveMovies } from '../../actions/movies'
import data from '../../config/jest/mockData'

it('returns the same state on an unhandled action', () => {
  expect(moives(initialState, {type: '_NULL'})).toEqual(initialState)
})

it('handle a REQUEST_MOVIES action', () => {
  expect(moives(initialState, requestMovies(2))).toEqual({
    ...initialState,
    isFetching: true,
    page: 2
  })
})

it('handle a RECEIVE_MOVIES action', () => {
  const state = moives(initialState, receiveMovies(data))
  expect(state).toMatchSnapshot()
  expect(state.isFetching).toBe(false)
  expect(state.results).toBeTruthy()
  expect(state.results.length).toEqual(20)
})