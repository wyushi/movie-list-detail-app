import data from './mock-data.json'

global.fetch = jest.fn(_ => {
  const response = {
    json: () => Promise.resolve(data)
  }
  return Promise.resolve(response)
})

