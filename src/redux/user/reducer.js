import ActionTypes from './ActionTypes'
import { fromJS } from 'immutable'

const initialState = null

export default function reducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.RESET_USER:
    return initialState
    case ActionTypes.FETCH_USER:
      return fromJS(payload.user)
    default:
      return state
  }
}


