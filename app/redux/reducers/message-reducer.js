import { messages } from '../actions/action-types'

const initialState = [
  { text: 'Hello world!' },
  { text: 'How are you' },
]

export default function reducer(state = initialState, action) {
  switch (action.type) {   
    case messages.ADD:
      return [
        ...state,
        action.payload
      ]
    
    default: 
      return state
  }
}
