import React from 'react'
import './index.css'
import './Login.css'
import './App.css'

class Login extends React.Component {
  render () {
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
    )
  }
}

export default Login
