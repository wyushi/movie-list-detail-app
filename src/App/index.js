import React from 'react'
import { Provider } from 'react-redux'
import Movies from 'containers/Movies'

import store from './redux-store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Movies />
      </Provider>
    )
  }
}

export default App