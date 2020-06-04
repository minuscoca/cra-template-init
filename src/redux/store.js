import {createStore, applyMiddleware, compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import Immutable from 'immutable'
import rootReducer from 'redux/reducers'

const middleware = [ReduxThunk]

// Redux Devtools
const composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) 
    : compose
const enhancer = composeEnhancers(
      applyMiddleware(...middleware),
      // other store enhancers if any
)

const initialState = Immutable.Map()
const store = createStore(rootReducer, initialState, enhancer)

export default store