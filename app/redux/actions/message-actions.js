import { messages } from './action-types'

export const addMessage = data => ({
  type: messages.ADD,
  payload: data,
})
