import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Login from './Login'

const USERSURL = 'http://localhost:3001/users'

class StartApp extends React.Component {
  state = {
    username: ''
  }

  postData = username => {
    const data = {
      username: username,
      password_digest: ''
    }
    return fetch(USERSURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  }

  loggingIn = e => {
    this.setState({ username: e.target.username.value })
    this.postData(this.state.username)
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        this.props.history.push('/game')
      })
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
          component={props => (
            <App {...props} currentPlayer={this.state.username} />
          )}
        />{' '}
      </div>
    )
  }
}

export default withRouter(StartApp)

serviceWorker.unregister()
