import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import Login from './Login'
import API from './API'

// const USERSURL = 'http://localhost:3000/users'

class StartApp extends React.Component {
  state = {
    username: '',
    password: ''
  }

<<<<<<< HEAD
  postData = username => {
    const data = {
      username: username,
      password_digest: '123456'
    }
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
=======
  signUserInSuccess = () => {
    API.signIn(this.state).then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        this.props.history.push('/game')
      }
>>>>>>> 7e5be8026e22352a79f46e938568132a11a4485f
    })
  }

<<<<<<< HEAD
  loggingIn = e => {
    this.postData(e.target.username.value)
=======
  createUser = () => {
    API.createNewUser(this.state).then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        this.props.history.push('/game')
      }
    })
  }

  handleAuthenticationSubmit = e => {
    this.setState(
      {
        username: e.target.username.value,
        password: e.target.password.value
      },
      this.signUserInSuccess
    )
  }

  handleNewUserCreationSubmit = e => {
    e.preventDefault()
>>>>>>> 7e5be8026e22352a79f46e938568132a11a4485f
    this.setState(
      {
        username: e.target.username.value,
        password: e.target.password.value
      },
      this.createUser
    )
  }

  render () {
    return (
      <div>
        <Route
          exact
          path='/'
          component={props => {
            return (
              <Login
                {...props}
                loggingIn={this.loggingIn}
                onHandleAuthenticationSubmit={this.handleAuthenticationSubmit}
                onHandleNewUserCreationSubmit={this.handleNewUserCreationSubmit}
                createNewUserPage={this.createNewUserPage}
              />
            )
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
