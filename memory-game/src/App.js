import React from 'react'
import './App.css'
import BoardGame from './BoardGame'
import LeaderBoard from './LeaderBoard'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

//"59bd59dc139b214a3672abe5" is id to remove from db 

let timeElapsed = 0
// if (index.length === 0) {
//   endGame(game)}

class App extends React.Component {
  state = {
    paintings: [],
    indeciesToPlay: [],
    runtime: 0, // set state at end of game and then do patch request
    timerOn: false
  }

  timerHandle = null

  getPaintings = () => {
    return fetch('http://localhost:3000/paintings').then(resp => resp.json())
  }

  setNewArrayofPaintings = () => {
    const index = [...Array(97).keys()] // this works
    let newArray = []
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
    let newArray = this.setNewArrayofPaintings()
    const arrayOf16 = newArray.concat(...newArray)
    this.shuffle(arrayOf16)
  }

  shuffle = (array) => {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    this.setState({ indeciesToPlay: array })
  }

  paintingsToPass = () => {
    let indecies = this.state.indeciesToPlay
    let paintings = this.state.paintings
    return indecies.map(index => paintings[index])
  }


  componentDidMount() {
    this.getPaintings()
    .then(paintings => this.setState({ paintings }))
   //magical code to ensure 
    //this things happen when i want them to happen 
  }

  startGame = () => {
    this.startTimer()
    this.createNewArray()
  }

  startTimer = () => {
    this.setState({ timerOn: true })
    this.timerHandle = setInterval(() => {
      timeElapsed += 1
      this.setState({ runtime: timeElapsed })
    }, 1000)
  }

  endTimer = () => {
    clearInterval(this.timerHandle)
    MySwal.fire({
      imageUrl: 'https://media.giphy.com/media/h5AHEcNMhn7u8/giphy.gif',
      //text: "Please click the images to turn them back over", 
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Bob Ross',
      animation: false,
      confirmButtonText: 'Im done',
      background: '#090526',
      padding: '.25em',
      confirmButtonColor: 'cornflowerblue',
      width: 300,
    })
  }

  render () {
    let paintingsToPass = this.paintingsToPass()
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Welcome to Art Memory!</h1>
          <img
            src='https://d32dm0rphc51dk.cloudfront.net/pdRjIGw58ecojporcDG0_w/medium.jpg'
            className='App-logo'
            alt='logo'
          />
          <form>
            <div>Put log in here</div>
          </form>
          <button className= "start-page-buttons" onClick={() => this.startGame()} > Start Game </button>
          <button className= "start-page-buttons" onClick={() => this.endTimer()}> End Game </button>
          <br></br>
          <LeaderBoard
            runtime={this.state.runtime}
          />

          <BoardGame
            paintingsToPass={paintingsToPass}
            createNewArray={this.createNewArray}
          />
        </header>
      </div>
    )
  }
}

export default App
