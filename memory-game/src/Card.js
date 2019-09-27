import React from 'react';


class Card extends React.Component {

    state = {
        flippedOver: false 
    }

    render() { 
        return <div>{this.props.card.title}</div>
    }

}
export default Card