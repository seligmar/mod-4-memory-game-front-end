import React from 'react'
import Card from './Card'

let flippedCards = 0

class BoardGame extends React.Component {

    state = {
        paintingInPlay: [],
        cards: 0,
        removedPaintings: []
    }  

checkMatch = (painting) => {
    const painting1 = this.state.paintingInPlay[1] 
    //if painting1
    if (painting.id === painting1.id) {
        alert("Match!") 
    this.removePaintings(painting.id)     
    this.setState({paintingInPlay: []})      
    this.clearCardCount() }
   else
  { this.setState({paintingInPlay: []}) 
      alert("no match")
   this.clearCardCount() }
}

flipCardOnBoard = () => { 
    flippedCards +=1 
    this.setState({ cards: flippedCards})
    }

clearCardCount = () => {
    flippedCards = 0 
    this.setState({ cards: flippedCards})
    }

removePaintings = id => {
    const cards = this.props.paintingsToPass
    const newArray = cards.filter(filteredPainting => filteredPainting.id === id)    
    this.setState({removedPaintings: newArray}) 
}    

// componentDidMount() {
//     this.loadBoard()
// } 

putPaintingInPlay = painting => {
    if (flippedCards === 1) {
    this.setState({paintingInPlay: painting}) }
    if (flippedCards === 2) {
        this.setState({paintingInPlay: [painting, this.state.paintingInPlay]}) 
}}
 

    render() {   
    const cards = this.props.paintingsToPass  
    return  (
    	<div className="grid-container">
        {cards.map(card => <Card 
        className="grid-item"
        removedPaintings={this.state.removedPaintings}
        key={card.id} 
        card={card}
        checkMatch={this.checkMatch}
        flippedCards={this.state.cards}
        flipCardOnBoard={this.flipCardOnBoard}
        putPaintingInPlay={this.putPaintingInPlay}
       />)}
    </div> )}
}

export default BoardGame
