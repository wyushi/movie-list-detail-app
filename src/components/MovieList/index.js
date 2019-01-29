import React from 'react'
import PropTypes from 'prop-types'
import { ListView } from 'react-native'
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
        renderRow={data => (
          <MovieListCell 
            movie={data} 
            onCellPress={this.props.onCellPress} />
        )} />
    )
  }
}

MovieList.propTypes = {
  items: PropTypes.array.isRequired,
  onCellPress: PropTypes.func,
}

MovieList.defaultProps = {
  onCellPress: _ => {},
}

export default MovieList