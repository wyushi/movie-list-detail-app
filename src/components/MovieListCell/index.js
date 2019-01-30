import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { imageURL, ImageType } from 'utils/endpoints'

import styles from './styles'

const MovieListCell = (props) => {
  
  const { movie={} } = props
  return (
    <TouchableHighlight 
      style={styles.touchableWrapper}
      onPress={_ => props.onCellPress(movie)}>
      <View style={styles.container}>
        <Image 
          style={styles.thumbnail}
          source={{uri: imageURL(movie['poster_path'], ImageType.THUMBNAIL)}}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{movie['title']}</Text>
          <Text style={styles.releaseDate}>{movie['release_date']}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

MovieListCell.propTypes = {
  movie: PropTypes.object.isRequired,
  onCellPress: PropTypes.func,
}

MovieListCell.defaultProps = {
  onCellPress: _ => {},
}

export default MovieListCell