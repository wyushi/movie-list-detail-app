import React from 'react'
import { ListView, RefreshControl, ActivityIndicator } from 'react-native'
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

  refresh = _ => {
    const { movies } = this.props
    const { isFetching } = movies
    if (isFetching) return
    this.props.dispatch(fetchMovies())
  }

  componentDidMount() {
    this.refresh()
  }

  renderCell = (data) => {
    return (
      <MovieListCell 
        movie={data} 
        onCellPress={movie => this.props.navigation.dispatch(StackActions.push({
          routeName: 'Details',
          params: { title: movie.title }
        }))} />
    )
  }

  renderFooter = () => {
    const { movies } = this.props
    const { isFetching, page } = movies
    if (isFetching && page > 1) {
      return <ActivityIndicator />
    } else {
      return null
    }
  }

  render() {
    const { movies } = this.props
    const { isFetching, page, results } = movies
    const initialFetching = isFetching && page === 1

    return (
      <ListView style={styles.container}
        refreshControl={<RefreshControl
          refreshing={initialFetching}
          onRefresh={this.refresh}
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

export default connect(state => state)(Movies)