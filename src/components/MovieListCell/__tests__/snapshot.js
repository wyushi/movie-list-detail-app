import React from 'react'
import renderer from 'react-test-renderer'

import MovieListCell from '../index'
import data from '../../../config/jest/mock-data'

it('renders a MovieListCell using Snapshots', () => {
  expect(renderer.create(
    <MovieListCell
      movie={data.results[0]}
      onCellPress={_ => {}}
    />
  )).toMatchSnapshot();
})