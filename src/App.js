import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Page404 from './pages/404'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/404' component={Page404} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
