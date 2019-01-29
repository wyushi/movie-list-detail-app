import { createStackNavigator, createAppContainer } from 'react-navigation'
import Movies from 'containers/Movies'
import MovieDetail from 'containers/MovieDetail'

const RootNav = createStackNavigator({
  Home: {screen: Movies},
  Details: {screen: MovieDetail}
});

export default createAppContainer(RootNav)