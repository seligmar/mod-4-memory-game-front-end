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
            {flippedCards > 0 ?
                 <button onClick={e => this.props.checkMatch(this.props.painting)}>CheckButton</button> : null}
        <div onClick={e => (this.flipCard(e))}>{this.state.flippedOver ? <img className = "img" src={this.props.card.image} alt={this.props.card.title}/>  :  
            <img className = "img" src="http://www.thecontemporarychester.com/wp-content/uploads/2016/01/image9.jpg" alt="Make Art Not War artist: Shepard Fairey"/>}
          </div>
        </div>
        )
    }

}
export default Card