import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'

const MovieListCell = (props) => {
  
  const { movie={} } = props
  return (
    <View style={styles.container}>
      <Image 
        style={styles.thumbnail}
        source={{uri: 'https://image.tmdb.org/t/p/w92/' + movie['poster_path']}}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{movie['title']}</Text>
        <Text style={styles.releaseDate}>{movie['release_date']}</Text>
      </View>
    </View>
  )
}

export default MovieListCell