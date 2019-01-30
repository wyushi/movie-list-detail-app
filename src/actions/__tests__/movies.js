import mockStore from 'redux-mock-store'
import { fetchMovies } from '../movies'

const store = mockStore()

beforeEach(() => {
  store.clearActions()
})

it('test fetch movies action', async () => {
  await store.dispatch(fetchMovies())
  const actions = store.getActions()
  expect(actions).toMatchSnapshot()
  expect(actions.length).toBe(2)
})