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
  .then(paintings => this.setState({paintings}))
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
  let newArray = setNewArrayofPaintings()
  indeciesToPlay = newArray + [,...newArray]
  this.setState({indeciesToPlay})
}  

paintingsToPass = () => {
  let indecies = this.state.indeciesToPlay
  let paintings = this.state.paintings 
  let finalPaintingList = [] 
  indecies.forEach(index => finalPaintingList.push(paintings[index]))
  return finalPaintingList
}

componentDidMount() {
  getPaintings()
}  

render () {
  let paintingsToPass = this.paintingsToPass() //not sure this is correct 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BoardGame 
        paintingsToPass={paintingsToPass}
        createNewArray={this.createNewArray}
        /> 
      </header>
    </div>
  );
} } 

export default App;
