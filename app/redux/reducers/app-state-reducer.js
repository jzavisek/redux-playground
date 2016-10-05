import { appState } from '../actions/action-types'

const initialState = {
  menu: {
    isCollapsed: false
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {   
    
    // handle app state changes here
    // ...
    
    default: 
      return state
  }
}
