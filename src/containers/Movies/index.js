import React from 'react'
import { View, Button } from 'react-native'
import { connect } from 'react-redux'
import { StackActions } from 'react-navigation'
import { fetchMovies } from 'actions/movies'
import MovieList from 'components/MovieList'

import styles from './styles'

class Movies extends React.PureComponent {
  static navigationOptions = {
    title: 'Movies'
  }
  
  componentDidMount() {
    this.props.dispatch(fetchMovies())
  }

  render() {
    const { movies } = this.props
    const { results } = movies

    if (results.length === 0) {
      return (
        <View style={styles.container}>
          <Button 
            title="Reload"
            onPress={_ => this.props.dispatch(fetchMovies())} />
        </View>
      )
    }

    return (
      <MovieList 
        items={results}
        onCellPress={movie => 
          this.props.navigation.dispatch(StackActions.push({
            routeName: 'Details',
            params: { title: movie.title }
          }))} 
      />
    )
  }
}

export default connect(state => state)(Movies)