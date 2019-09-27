import React from 'react'
import { resolvePlugin } from '@babel/core'

const USERSURL = 'http://localhost:3000/users'

class LeaderBoard extends React.Component {
  state = {
    leaderArray: []
  }

  counter = 0

  fetchUsers = () => {
    return fetch(USERSURL).then(resp => resp.json())
  }

  componentDidMount () {
    this.fetchUsers().then(users => this.setState({ leaderArray: users }))
  }

  increasedCounter = () => {
    this.counter += 1
    return this.counter
  }

  sortedLeaderBoard = () => {
    this.state.leaderArray.sort((a, b) => {
      return a.runTime - b.runTime
    })
  }

  render () {
    return (
      <div>
        <h1>Leader Board</h1>
        <ul>
          {this.state.leaderArray.map((user, index) => {
            return (
              <li key={user.id}>
                {index + 1}. {user.username}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default LeaderBoard
