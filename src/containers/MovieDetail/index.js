import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

class Movie extends React.PureComponent {
  static navigationOptions = ({navigation}) => {
    return {
         title: navigation.state.params.movie.title
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Movie Detail</Text>
      </View>
    )
  }
}

export default Movie