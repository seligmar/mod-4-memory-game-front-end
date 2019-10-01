import React from 'react'
import './Login.css'
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
      <CreateNewUser sendToCreateNewUserPage={this.sendToCreateNewUserPage} />
    ) : (
      <LoginLandingPage
        onHandleSubmit={this.props.onHandleSubmit}
        sendToCreateNewUserPage={this.sendToCreateNewUserPage}
      />
    )
  }
}

export default Login
