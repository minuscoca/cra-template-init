import { combineReducers } from 'redux-immutable'
import app from 'redux/app/reducer'
import user from 'redux/user/reducer'

const rootReducer = combineReducers({
  app,
  user,
})

export default rootReducer