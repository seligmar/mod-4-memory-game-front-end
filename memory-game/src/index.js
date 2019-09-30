import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import StartApp from './StartApp'

import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <Router>
    <StartApp />
  </Router>,
  document.getElementById('root')
)
