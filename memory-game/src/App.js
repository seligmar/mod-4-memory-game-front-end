import React from 'react';
import './App.css';
import BoardGame from './BoardGame'
import LeaderBoard from './LeaderBoard';

let downloadTimer = 0
let timeElapsed = 0
// if (index.length === 0) {
//   endGame(game)}  

class App extends React.Component {

  state = {
    paintings: [],
    indeciesToPlay: [],
    runTime: 0, //set state at end of game and then do patch request
    timerOn: false
  }

  timerHandle = null

  getPaintings = () => {
    return fetch("http://localhost:3000/paintings")
      .then(resp => resp.json())
  }


  setNewArrayofPaintings = () => {
    const index = [...Array(97).keys()] //this works 
    let newArray = []
    var i = 0;
    while (i < 8) {
      var rand = index[Math.floor(Math.random() * index.length)]; //this works 
      var indexNew = index.indexOf(rand);
      if (indexNew > -1) {
        index.splice(indexNew, 1);
        newArray.push(rand)
      }
      i++
    }
    return newArray
  }

  createNewArray = () => { //this is the function to call on click of 'start game'
    let newArray = this.setNewArrayofPaintings()
    const indeciesToPlay = newArray.concat(...newArray)
    this.setState({ indeciesToPlay })
  }


  paintingsToPass = () => {
    let indecies = this.state.indeciesToPlay
    let paintings = this.state.paintings
    return indecies.map(index => paintings[index])
  }

  componentDidMount() {
    this.getPaintings()
      .then(paintings => this.setState({ paintings }, this.createNewArray)) //magical code to ensure 
    //this things happen when i want them to happen 
  }

  startGame = () => {
    this.startTimer()
  }

  startTimer = () => {
    this.setState({ timerOn: true })
    this.timerHandle = setInterval( () => {
      timeElapsed += 1
      this.setState({ runTime: timeElapsed })
    }, 1000)
  }

  endTimer = () => {
    clearInterval(this.timerHandle)
  }

  render() {
    let paintingsToPass = this.paintingsToPass()
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Art Memory!</h1>
          <img src="https://d32dm0rphc51dk.cloudfront.net/pdRjIGw58ecojporcDG0_w/medium.jpg" className="App-logo" alt="logo" />
          <form>
            <div>Put log in here</div>
          </form>

          <button onClick={() => this.startGame()} > Start Game </button>
          <button onClick={() => this.endTimer()}> End Game </button>
          <LeaderBoard
            runtime={this.state.runTime}
          />

          <BoardGame
            paintingsToPass={paintingsToPass}
            createNewArray={this.createNewArray}
          />
        </header>
      </div>
    );
  }
}

export default App;
