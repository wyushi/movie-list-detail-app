import React from 'react'
import { Provider } from 'react-redux'
import AppContent from 'components/Content'

import store from './redux-store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContent />
      </Provider>
    )
  }
}

export default App