import React from 'react';


class Card extends React.Component {

    state = {
        flippedOver: false 
    }

flipCard = e => {
    this.props.flipCardOnBoard()
    this.setState({flippedOver: !this.state.flippedOver})
    this.props.putPaintingInPlay(this.props.card)
}

 
    render() { 
        return (
        <div>
        <div onClick={e => this.flipCard(e)}>{this.state.flippedOver 
        || this.props.anyCardFlipped ? <img className = "img" src={this.props.card.image} alt={this.props.card.title}/>  :  
            <img className = "img" src="http://www.thecontemporarychester.com/wp-content/uploads/2016/01/image9.jpg" alt="Make Art Not War artist: Shepard Fairey"/>}
          </div>
        </div>
        )
    }

}
export default Card