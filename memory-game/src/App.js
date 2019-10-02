import React from 'react'
import './App.css'
import './index.css'
import paintings from './data/paintings'
import BoardGame from './BoardGame'
import LeaderBoard from './LeaderBoard'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { withRouter } from 'react-router-dom'

import { Button } from 'semantic-ui-react'

const MySwal = withReactContent(Swal)

let timeElapsed = 0

class App extends React.Component {
  state = {
    paintings: [],
    indeciesToPlay: [],
    runtime: 0, // set state at end of game and then do patch request
    showStartGameButton: true

  }

  timerHandle = null

  setNewArrayofPaintings = () => {
    const index = [...Array(97).keys()] // this works
    const newArray = []
    var i = 0
    while (i < 8) {
      var rand = index[Math.floor(Math.random() * index.length)] // this works
      var indexNew = index.indexOf(rand)
      if (indexNew > -1) {
        index.splice(indexNew, 1)
        newArray.push(rand)
      }
      i++
    }
    return newArray
  }

  createNewArray = () => {
    // this is the function to call on click of 'start game'
    const newArray = this.setNewArrayofPaintings()
    const arrayOf16 = newArray.concat(...newArray)
    this.shuffle(arrayOf16)
  }

  shuffle = array => {
    let counter = array.length
    while (counter > 0) {
      const index = Math.floor(Math.random() * counter)
      counter--
      const temp = array[counter]
      array[counter] = array[index]
      array[index] = temp
    }
    this.setState({ indeciesToPlay: array })
  }

  paintingsToPass = () => {
    const indecies = this.state.indeciesToPlay
    const paintings = this.state.paintings
    return indecies.map(index => paintings[index])
  }

  componentDidMount () {
    this.setState({ paintings })
  }

  startGame = () => {
    this.startTimer()
    this.createNewArray()
  }

  startTimer = () => {
    this.setState({ runtime: 0, timerOn: true })
    this.timerHandle = setInterval(() => {
      timeElapsed += 1
      this.setState({ runtime: timeElapsed })
    }, 1000)
  }

  endTimer = () => {
    clearInterval(this.timerHandle)
    MySwal.fire({
      imageUrl: 'https://media.giphy.com/media/h5AHEcNMhn7u8/giphy.gif',
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Bob Ross',
      animation: false,
      confirmButtonText: 'Im done',
      background: '#090526',
      padding: '.25em',
      confirmButtonColor: 'cornflowerblue',
      width: 300
    })
    this.setState({ indeciesToPlay: [] })
  }

  postData = (username, score) => {
    const Newuser = {
      user: {
        username: username,
        highScore: score
      }
    }
    return fetch(SAVEGAMEURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(resp => resp.json())
      .then(resp => console.log(resp))
  }

  endGame = () => {
    this.setState({ showStartGameButton: false })
    this.endTimer()
    this.postData(this.props.currentPlayer, this.state.runtime)
  }

  quitApp = () => {
    if (this.timerHandle === null) {
      this.props.history.push('/')
    } else {
      clearInterval(this.timerHandle)
      this.props.history.push('/')
    }
  }

  render () {
    const paintingsToPass = this.paintingsToPass()
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Welcome to Art Memory!</h1>
          <img
            src='https://d32dm0rphc51dk.cloudfront.net/pdRjIGw58ecojporcDG0_w/medium.jpg'
            className='App-logo'
            alt='logo'
          />
          <br />
          {this.state.showStartGameButton ? (
            <Button
              size='large'
              primary
              className='start-page-buttons'
              onClick={() => this.startGame()}
            >
              {' '}
              Start Game{' '}
            </Button>
          ) : <h2>CONGRATS, THANKS FOR PLAYING :)</h2>}
          <br />
          <Button
            size='large'
            primary
            className='start-page-buttons'
            onClick={() => this.quitApp()}
          >
            {'   '}
            Logout {'  '}
          </Button>
          <br />
          <BoardGame
            endGame={this.endGame}
            paintingsToPass={paintingsToPass}
            createNewArray={this.createNewArray}
          />
            <LeaderBoard
              runtime={this.state.runtime}
              currentPlayer={this.props.currentPlayer}
            />
          ) : null}
        </header>
      </div>
    )
  }
}

export default withRouter(App)
