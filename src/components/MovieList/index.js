import React from 'react'
import { ListView, Text, View } from 'react-native'

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
      <View style={styles.container}>
        <ListView
          dataSource={this.ds.cloneWithRows(items)}
          renderRow={(rowData) => <Text>{rowData.id}</Text>} />
      </View>
    )
  }
}

export default MovieList