import React from 'react'
import Card from './Card'

let flippedCards = 0

class BoardGame extends React.Component {

    state = {
        paintingInPlay: [],
        cards: 0,
        removedPaintings: []
    }

loadBoard = () => this.setState({gamePaintings: this.props.paintingsToPass})   

checkMatch = (painting) => {
    const painting1 = this.state.paintingInPlay[1] 
    //if painting1
    if (painting.id === painting1.id) {
        alert("Match!")  
    this.setState({paintingInPlay: []})      
    const newArray = this.state.gamePaintings.filter(filteredPainting => filteredPainting.id !== painting1.id)    
    this.setState({removedPaintings: newArray}, ) 
    this.clearCardCount() }
   else
   this.setState({paintingInPlay: []}) 
   alert("no match")
   this.clearCardCount()
}

flipCardOnBoard = () => { 
    flippedCards +=1 
    this.setState({ cards: flippedCards})
    }

clearCardCount = () => {
    flippedCards = 0 
    this.setState({ cards: flippedCards})
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