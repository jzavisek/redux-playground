import { combineReducers } from 'redux'
import messages from './message-reducer'
import appState from './app-state-reducer'

export default combineReducers({
  messages,
  appState,
})
