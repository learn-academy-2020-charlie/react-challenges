import React, { Component } from 'react';

class Robot1 extends Component {
    render(){
        return(
            <React.Fragment>
                <h2>The Good Robot:</h2>
                <p> I hear you saying { this.props.userInput }, is that correct? </p>
            </React.Fragment>
        )
    }
}

export default Robot1