import React from 'react'
import Card from './Card'

let flippedCards = 0

class BoardGame extends React.Component {

    state = {
        paintingInPlay: [],
        cards: 0,
        gamePaintings: []
    }

loadBoard = () => this.setState({gamePaintings: this.props.paintingsToPass})   

checkMatch = painting => {
    if (flippedCards === 1) {
    if (this.state.paintingInPlay[0].id === painting.id) {
        alert("Match!")  
    this.setState({paintingInPlay: []})      
    const newArray = this.state.gamePaintings.filter(filteredPainting => filteredPainting.id !== painting.id)    
    this.setState({gamePaintings: newArray}, this.clearCardCount)}     }
  //  this.setState({cardFlipped: false})}  
   // this.setState({paintingInPlay: []})  }
  //  this.setState({cardsFlipped: []})    
   // this.setState({cardsFlipped: []})
   else 
   {this.setState({paintingInPlay: []}) }
   alert("no match")
 //  this.clearCardCount()
}

flipCardOnBoard = () => { 
    flippedCards +=1 
    this.setState({ cards: flippedCards})
    }

clearCardCount = () => {
    flippedCards = 0 
    this.setState({ cards: flippedCards})
    }

componentDidMount() {
    this.loadBoard()
} 

putPaintingInPlay = painting => {
    if (flippedCards === 1) {
    this.setState({paintingInPlay: painting}) 
}}

    render() { 
    const cards = this.props.paintingsToPass
    return  (
    <div> {cards.map(card => <Card 
        key={card.id} 
        card={card}
        checkMatch={this.checkMatch}
        flippedCards={this.state.cards}
        flipCardOnBoard={this.flipCardOnBoard}
        putPaintingInPlay={this.putPaintingInPlay}
        checkMatch={this.checkMatch}/>
        )} 
    </div> )
    }
}

export default BoardGame