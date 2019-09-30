import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Login from './Login'

class StartApp extends React.Component {
  state = {
    username: ''
  }

  loggingIn = e => {
    this.setState({ username: e.target.username.value })
    this.props.history.push('/game')
  }

  render () {
    return (
      <div>
        <Route
          exact
          path='/'
          component={props => {
            return <Login {...props} loggingIn={this.loggingIn} />
          }}
        />
        <Route
          exact
          path='/game'
          component={props => <App {...props} username={this.state.username} />}
        />{' '}
      </div>
    )
  }
}

export default withRouter(StartApp)

serviceWorker.unregister()
