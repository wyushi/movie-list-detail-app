import React from 'react'
import { 
  View, ListView, 
  RefreshControl, ActivityIndicator, Text, Button
} from 'react-native'
import { connect } from 'react-redux'
import { StackActions } from 'react-navigation'
import { fetchMovies } from 'actions/movies'
import MovieListCell from 'components/MovieListCell'

import styles from './styles'

class Movies extends React.PureComponent {
  static navigationOptions = {
    title: 'Movies'
  }

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id
    })
  }

  componentDidMount() {
    this.props.dispatch(fetchMovies())
  }

  renderErrorReload = (error) => {
    return (
      <View style={styles.errorContainer}>
        <Text>{error.message}</Text>
        <Button title="Reload" onPress={_ => this.props.dispatch(fetchMovies())} />
      </View>
    )
  }

  renderCell = (data) => {
    return (
      <MovieListCell 
        movie={data} 
        onCellPress={movie => this.props.navigation.dispatch(StackActions.push({
          routeName: 'Details',
          params: { movie }
        }))} />
    )
  }

  renderFooter = () => {
    const { isFetching, page } = this.props.movies
    if (isFetching && page > 1) {
      return <ActivityIndicator />
    } else {
      return null
    }
  }

  render() {
    const { isFetching, page, results, error } =  this.props.movies
    if (error) { 
      return this.renderErrorReload(error) 
    }

    return (
      <ListView style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={isFetching && page === 1}
            onRefresh={_ => this.props.dispatch(fetchMovies())}
          />}
        dataSource={this.ds.cloneWithRows(results)}
        enableEmptySections={true}
        renderRow={this.renderCell}
        renderFooter={this.renderFooter}
        onEndReached={_ => {
          if (isFetching) return
          this.props.dispatch(fetchMovies(page + 1))
        }} />
    )
  }
}

const mapStateToProps = (state) => ({ movies: state.movies })

export default connect(mapStateToProps)(Movies)