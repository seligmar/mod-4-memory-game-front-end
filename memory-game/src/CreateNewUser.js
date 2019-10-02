import React from 'react'
import './Login.css'

class CreateNewUser extends React.Component {
  render () {
    return (
      <div className='App-header'>
        <div className='Login'>
          <h1 style={{ paddingBottom: '10px' }}>Create Account</h1>
          <form
            onSubmit={e => this.props.onHandleNewUserCreationSubmit(e)}
            style={{ paddingBottom: '40px' }}
            class='ui blue form'
          >
            <div class='field'>
              <label> Enter New Username </label>
              <input
                // onChange={e => this.props.onLoginOnChange(e)}
                style={{ width: 200 }}
                type='text'
                name='username'
                placeholder='username'
              />
            </div>
            <div style={{ paddingBottom: '5px' }} class='field'>
              <label> Enter New Password </label>
              <input
                style={{ width: 200 }}
                type='text'
                name='password'
                placeholder='password'
              />
            </div>
            <button class='ui blue button' type='submit'>
              Create Me
            </button>
          </form>
          <button
            onClick={() => this.props.sendToCreateNewUserPage()}
            class='ui blue button'
            type='submit'
          >
            Back To Welcome Page
          </button>
        </div>
      </div>
    )
  }
}

export default CreateNewUser
