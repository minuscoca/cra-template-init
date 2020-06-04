import ActionTypes from './ActionTypes'
import { fromJS } from 'immutable'

const initialState = fromJS({
  loading: {
    isUserLoginLoading: false,
  },
})

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.RESET_APP:
      return initialState
    case ActionTypes.UPDATE_USER_LOGIN_LOADING:
      return state.setIn([ 'loading', 'isUserLoginLoading' ], payload.bool)
    default:
      return state
  }
}