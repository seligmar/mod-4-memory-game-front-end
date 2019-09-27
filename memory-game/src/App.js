import React from 'react';
import './App.css';
import BoardGame from './BoardGame'


// if (index.length === 0) {
//   endGame(game)}  

class App extends React.Component {

  state = {
    paintings: [],
    indeciesToPlay: []
  }

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
   newArray.push(rand)} 
  i++ }
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
    .then(paintings => this.setState({paintings}, this.createNewArray)) //magical code to ensure 
    //this things happen when i want them to happen 
}  

render () {
  let paintingsToPass = this.paintingsToPass() 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Art Memory!</h1>
       <img src="https://d32dm0rphc51dk.cloudfront.net/pdRjIGw58ecojporcDG0_w/medium.jpg" className="App-logo" alt="logo" />
        <form>
          <div>Put log in here</div>
        </form>
        <BoardGame 
        paintingsToPass={paintingsToPass}
        createNewArray={this.createNewArray}
        /> 
      </header>
    </div>
  );
} } 

export default App;
