import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

import { configureStore } from './redux/store'
import { Provider } from 'react-redux'

const store = configureStore()
const Root = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(Root, document.getElementById('page'))
