import React from 'react'
import './index.css'
import './Login.css'
<<<<<<< HEAD
import './App.css'
=======
import LoginLandingPage from './LoginLandingPage'
import CreateNewUser from './CreateNewUser'
>>>>>>> 7e5be8026e22352a79f46e938568132a11a4485f

class Login extends React.Component {
  state = {
    showCreateNewPage: false
  }

  sendToCreateNewUserPage = () => {
    this.setState({ showCreateNewPage: !this.state.showCreateNewPage })
  }

  render () {
<<<<<<< HEAD
    return (
      <div className='App-header'>
        <div className='Login'>
          <h1>New Game</h1>
          <form onSubmit={e => this.props.loggingIn(e)} class='ui form'>
            <div style={{ paddingBottom: '10px' }} class='field'>
              <label>Type in a username to start:</label>
              <input
                style={{ width: 200 }}
                type='text'
                name='username'
                placeholder='username'
              />
            </div>
            <button class='ui button' type='submit'>
              Start Game
            </button>
          </form>
        </div>
      </div>
=======
    return this.state.showCreateNewPage ? (
      <CreateNewUser
        onHandleNewUserCreationSubmit={this.props.onHandleNewUserCreationSubmit}
        sendToCreateNewUserPage={this.sendToCreateNewUserPage}
      />
    ) : (
      <LoginLandingPage
        onHandleAuthenticationSubmit={this.props.onHandleAuthenticationSubmit}
        sendToCreateNewUserPage={this.sendToCreateNewUserPage}
      />
>>>>>>> 7e5be8026e22352a79f46e938568132a11a4485f
    )
  }
}

export default Login
