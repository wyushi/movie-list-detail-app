import React from 'react'
import { ListView, Text, View } from 'react-native'
import MovieListCell from 'components/MovieListCell'

import styles from './styles'

class MovieList extends React.PureComponent {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id
    })
  }

  render() {
    const { items=[] } = this.props
    return (
      <ListView style={styles.container}
        dataSource={this.ds.cloneWithRows(items)}
        renderRow={(data) => <MovieListCell movie={data}/>} />
    )
  }
}

export default MovieList