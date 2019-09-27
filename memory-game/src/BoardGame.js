import React from 'react'
import Card from './Card'

class BoardGame extends React.Component {

    state = {
        paintingInPlay: [],
        cardFlipped: false,
        gamePaintings: []
    }

loadBoard = () => this.setState({gamePaintings: this.props.paintingsToPass})   

checkMatch = painting => {
    if (this.state.paintingInPlay[0].id === painting.id) {
        alert("Match!")    
    const newArray = this.state.gamePaintings.filter(filteredPainting => filteredPainting.id !== painting.id)    
    this.setState({gamePaintings: newArray})   
    this.setState({cardFlipped: false})}  
   // this.setState({paintingInPlay: []})  }
  //  this.setState({cardsFlipped: []})    
   // this.setState({cardsFlipped: []})
   else 
   this.setState({gamePaintings: this.state.gamePaintings})
}


flipCardOnBoard = () =>  this.setState({cardFlipped: true}) 

componentDidMount() {
    this.loadBoard()
} 

putPaintingInPlay = painting => {
    if (this.state.paintingInPlay.length === 0) {
    this.setState({paintingInPlay: [painting, ...this.state.paintingInPlay]})} 
    else this.checkMatch(painting)}

    render() { 
    const cards = this.props.paintingsToPass
    return  (
    <div> {cards.map(card => <Card 
        key={card.id} 
        card={card}
      //  paintingInPlay={this.state.paintingInPlay}
        flipCardOnBoard={this.flipCardOnBoard}
        putPaintingInPlay={this.putPaintingInPlay}
        checkMatch={this.checkMatch}/>
        )} 
    </div> )
    }
}

export default BoardGame