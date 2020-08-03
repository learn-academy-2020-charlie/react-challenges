import React, { Component } from 'react';

class Robot3 extends Component {
    kanyeListening = (string) => {
        return string.split("").map(value => {
            return value = "me"
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>Kanye Bot 5000</h1>
                <p> { this.kanyeListening(this.props.userInput) } </p>
            </React.Fragment>
        )
    }
}

export default Robot3