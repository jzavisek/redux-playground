import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'

import { configureStore } from './redux/store'

const store = configureStore();

function renderApp(Component) {
  ReactDOM.render(<Component store={store} />, document.getElementById('page'))
}

renderApp(Root)

if(module.hot) {
  module.hot.accept('./components/root', () => {
    const NextRoot = require('./components/root').default
    renderApp(NextRoot);
  })
}