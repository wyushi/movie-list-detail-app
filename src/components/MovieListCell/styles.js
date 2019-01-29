import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  touchableWrapper: {

  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  thumbnail: {
    height: 138,
    width: 92,
    backgroundColor: '#888'
  },
  info: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  releaseDate: {
    color: 'grey'
  }
})
