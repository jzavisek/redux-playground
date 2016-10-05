import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers/root-reducer'

export function configureStore() {

  const initialState = {}
  const middleware = [
    // add middlewares here (like promiseMiddleware, logginMiddleware, etc.)
    // ...
  ]

  const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      devTools
    )
  )

  return store
}
