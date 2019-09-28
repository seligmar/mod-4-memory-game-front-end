import React from 'react';

class Card extends React.Component {

    state = {
        flippedOver: false
    }

flipCard = e => {
  this.setState({flippedOver: !this.state.flippedOver})
  }

  flipCardAndInitiate = e => {
    this.props.flipCardOnBoard()
    this.setState({flippedOver: !this.state.flippedOver}, this.props.putPaintingInPlay(this.props.card))
  }
//}

    render() { 
       // const flippedCards = this.props.flippedCards
        return (
        <div className= "card-div">
            {this.props.removedPaintings.includes(this.props.card) ? 
            <img src="https://d32dm0rphc51dk.cloudfront.net/pdRjIGw58ecojporcDG0_w/medium.jpg" className="App-logo" alt="logo" /> : 
                this.state.flippedOver ? 
                <div className="flipped-card-div"> 
                 <img onClick={e => (this.flipCard(e))} className = "img-flipped" src={this.props.card.image} alt={this.props.card.title} /> 
                 <p className="details">Title: {this.props.card.title} Artist: {this.props.card.artist.name}</p>
                 <button className= "question-buttons" onClick={e => this.props.checkMatch(this.props.card)}>Match?</button> 

                 </div>
                 : 
            <div> <img onClick={e => (this.flipCardAndInitiate(e))} className = "img" src="http://www.thecontemporarychester.com/wp-content/uploads/2016/01/image9.jpg" alt="Make Art Not War artist: Shepard Fairey" /></div> } 
        </div>
        )
    }

}
export default Card



