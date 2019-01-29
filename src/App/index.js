import React from 'react'
import { Provider } from 'react-redux'
import RootNav from 'containers/RootNav'

import store from './redux-store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNav />
      </Provider>
    )
  }
}

export default App