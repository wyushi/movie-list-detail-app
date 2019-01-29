import React from 'react'
import { View, Button } from 'react-native'
import { connect } from 'react-redux'
import { fetchMovies } from 'actions/movies'
import MovieList from 'components/MovieList'

import styles from './styles'

const Movies = (props) => {
  const { movies } = props
  const { results } = movies

  if (results.length === 0) {
    return (
      <View style={styles.container}>
        <Button 
          title="Reload"
          onPress={_ => props.dispatch(fetchMovies())} />
      </View>
    )
  }
  return (
    <MovieList 
      items={results}
      onCellPress={movie => console.log(movie)} />
  )
}

export default connect(state => state)(Movies)