import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'

class Movie extends React.PureComponent {
  static navigationOptions = ({navigation}) => {
    return {
         title: navigation.state.params.movie.title
    }
  }

  render() {
    const { movie } = this.props.navigation.state.params

    return (
      <View style={styles.container}>
        <View style={styles.posterContainer}>
          <Image 
            style={styles.poster}
            source={{uri: 'https://image.tmdb.org/t/p/w780/' + movie['poster_path']}}/>
        </View>
        <Text>{movie.title}</Text>
        <Text>{movie.overview}</Text>
      </View>
    )
  }
}

export default Movie