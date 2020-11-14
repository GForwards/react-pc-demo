import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.scss'
import 'antd/dist/antd.min.css'
import Home from './pages/home'
import reportWebVitals from './reportWebVitals'
import configStore from './store'

const store = configStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
