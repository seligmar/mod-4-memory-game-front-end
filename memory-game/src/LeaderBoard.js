import React from 'react'


class LeaderBoard extends React.Component {

    state = {
        leaderArray : []
    }



    render() {
        return (
            <div>
                <h1> This is the runtime {this.props.runtime} </h1>
            </div>
        )
    }

}


export default LeaderBoard