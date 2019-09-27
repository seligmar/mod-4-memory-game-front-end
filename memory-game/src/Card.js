import React from 'react';

class Card extends React.Component {

    state = {
        flippedOver: false
    }

flipCard = e => {
  this.props.flipCardOnBoard()
  this.setState({flippedOver: !this.state.flippedOver}) 
  this.props.putPaintingInPlay(this.props.card)} 

//}

    render() { 
        const flippedCards = this.props.flippedCards
        return (
        <div>
            {this.state.flippedOver && flippedCards > 1 ?
                <div> 
                 <img onClick={e => (this.flipCard(e))} className = "img" src={this.props.card.image} alt={this.props.card.title} /> 
                 <button onClick={e => this.props.checkMatch(this.props.painting)}>CheckButton</button> 
                 </div>
                 : 
            <div> <img onClick={e => (this.flipCard(e))} className = "img" src="http://www.thecontemporarychester.com/wp-content/uploads/2016/01/image9.jpg" alt="Make Art Not War artist: Shepard Fairey" /></div> }
        </div>
        )
    }

}
export default Card