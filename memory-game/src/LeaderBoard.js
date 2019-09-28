import React from 'react'
import { resolvePlugin } from '@babel/core'

const USERSURL = 'http://localhost:3001/users'

class LeaderBoard extends React.Component {
  state = {
    leaderArray: [],
    currentPlayer: {
      playerTotal: 7,
      user: {
        id: null,
        username: 'currentPlayer',
        password_digest: '123456',
        highScore: 0
      }
    }
  }

  counter = 0

  fetchUsers = () => {
    return fetch(USERSURL).then(resp => resp.json())
  }

  componentDidMount () {
    this.fetchUsers().then(users => {
      this.setState({ leaderArray: users })
    })
  }

  increasedCounter = () => {
    this.counter += 1
    return this.counter
  }

  doSorting = newArray => {
    return newArray.sort((a, b) => {
      return a.user.highScore - b.user.highScore
    })
  }

  sortedLeaderBoard = () => {
    const updatedLeaderArray = [
      ...this.state.leaderArray,
      this.state.currentPlayer
    ]
    return this.doSorting(updatedLeaderArray)
  }

  render () {
    return (
      <div>
        <h1>Leader Board</h1>
        <h2>Time Elapsed: {this.props.runtime}</h2>
        <ol type='1'>
          {this.sortedLeaderBoard().map(user => {
            return (
              <li key={user.user.id}>
                {user.user.username}: {user.user.highScore} secs
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

export default LeaderBoard
