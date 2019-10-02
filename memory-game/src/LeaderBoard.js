import React from 'react'
// import { resolvePlugin } from '@babel/core'
import '../src/LeaderBoard.css'

const USERSURL = 'http://localhost:3000/users'

class LeaderBoard extends React.Component {
  counter = 1000
  state = {
    leaderArray: []
  }

  currentPlayer = {}

  fetchUsers = () => {
    return fetch(USERSURL).then(resp => resp.json())
  }

  componentDidMount () {
    this.fetchUsers().then(users => {
      if (users.length > 10) {
        users = users
          .sort((a, b) => {
            return a.user.highScore - b.user.highScore
          })
          .splice(0, 10)
      }
      this.setState({ leaderArray: users })
    })
  }

  increasedCounter = () => {
    this.counter += 1
    return this.counter
  }

  doSorting = newArray => {
    newArray.sort((a, b) => {
      return a.user.highScore - b.user.highScore
    })
    return newArray
  }

  sortedLeaderBoard = time => {
    this.currentPlayer = this.state.leaderArray.find(
      n => n.user.username === this.props.currentPlayer
    )
    if (this.currentPlayer) {
      this.currentPlayer.user.highScore = time
    }
    const updatedLeaderArray = [...this.state.leaderArray]
    return this.doSorting(updatedLeaderArray)
  }

  render () {
    return (
      <div style={{ backgroundColor: '#030112' }} id='container'>
        <h1>Leader Board</h1>
        <h2 style={{ color: 'red' }}>Time Elapsed: {this.props.runtime}</h2>
        <div class='row'>
          <div class='name'>
            {' '}
            <b>Username</b>
          </div>
          <div class='score'>
            <b>Best Score</b>
          </div>
        </div>
        <br />
        {this.sortedLeaderBoard(this.props.runtime).map(user => {
          if (user.user.username === this.props.currentPlayer) {
            return (
              <div key={user.user.id} style={{ color: 'green' }} class='row'>
                <div class='name'>
                  {' '}
                  <b>
                    <i>{user.user.username}</i>
                  </b>
                </div>
                <div class='score'>
                  <b>
                    <i>{user.user.highScore}</i>
                  </b>
                </div>
              </div>
            )
          } else {
            return (
              <div key={user.user.id} class='row'>
                <div class='name'>{user.user.username}</div>
                <div class='score'>{user.user.highScore}</div>
              </div>
            )
          }
        })}
      </div>
    )
  }
}

export default LeaderBoard
