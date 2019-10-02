import React from 'react'
import './index.css'
import './Login.css'
import './App.css'
import LoginLandingPage from './LoginLandingPage'
import CreateNewUser from './CreateNewUser'

class Login extends React.Component {
  state = {
    showCreateNewPage: false
  }

  sendToCreateNewUserPage = () => {
    this.setState({ showCreateNewPage: !this.state.showCreateNewPage })
  }

  render () {
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
    )
  }
}

export default Login
