import React from 'react'
import './Login.css'

class LoginLandingPage extends React.Component {
  render () {
    return (
      <div className='Login'>
        <h1 style={{ paddingBottom: '10px' }}>Welcome To Memory Masters</h1>
        <form
          onSubmit={e => this.props.onHandleSubmit(e)}
          style={{ paddingBottom: '40px' }}
          class='ui form'
        >
          <div class='field'>
            <label> Username </label>
            <input
              // onChange={e => this.props.onLoginOnChange(e)}
              style={{ width: 200 }}
              type='text'
              name='username'
              placeholder='username'
            />
          </div>
          <div style={{ paddingBottom: '5px' }} class='field'>
            <label> Password </label>
            <input
              style={{ width: 200 }}
              type='text'
              name='password'
              placeholder='password'
            />
          </div>
          <button class='ui button' type='submit'>
            Sign In
          </button>
        </form>
        <button
          onClick={() => this.props.sendToCreateNewUserPage()}
          class='ui button'
        >
          Create New Account
        </button>
      </div>
    )
  }
}

export default LoginLandingPage
