import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import store from 'redux/store'
import Home from 'pages/Home'
import About from 'pages/About'

function App() {
  return (
  <Router>
    <Provider store={store}>
      <Switch >
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Provider>
  </Router>
  )
}

export default App
