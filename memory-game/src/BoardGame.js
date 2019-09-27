import React from 'react'
import Card from './Card'

class BoardGame extends React.Component {
  state = {
    paintingInPlay: [],
    cardFlipped: false,
    gamePaintings: []
  }

  // loadBoard = () => this.setState({gamePaintings: this.props.paintingsToPass})

  checkMatch = painting => {
    if (
      this.state.cardFlipped === true &&
      this.state.paintingInPlay[0].id === painting.id
    ) {
      alert('Match!')
      const newArray = this.state.gamePaintings.filter(
        filteredPainting => filteredPainting.id !== painting.id
      )
      this.setState({ gamePaintings: newArray })
      this.setState({ paintingInPlay: [] })
      this.setState({ cardFlipped: false })
    } else this.setState({ paintingInPlay: painting })
    this.setState({ cardFlipped: false })
  }

  flipCardOnBoard = () => this.setState({ cardFlipped: true })
  putPaintingInPlay = painting => this.setState({ paintingInPlay: painting })

  render () {
    const cards = this.props.paintingsToPass
    return (
      <div>
        {' '}
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            flipCardOnBoard={this.flipCardOnBoard}
            checkMatch={this.checkMatch}
          />
        ))}
      </div>
    )
  }
}

export default BoardGame
