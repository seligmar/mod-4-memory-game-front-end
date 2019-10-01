import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Login from './Login'

// const USERSURL = 'http://localhost:3000/users'

class StartApp extends React.Component {
  state = {
    username: ''
  }

  postData = username => {
    const data = {
      username: username,
      password_digest: '123456'
    }
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
      })
  }

  loggingIn = e => {
    this.postData(e.target.username.value)
    this.setState(
      { username: e.target.username.value },
      this.props.history.push('/game')
    )
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
