import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Page404 from './pages/404'

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/login'>login</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/404' component={Page404} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  )
}

export default App
