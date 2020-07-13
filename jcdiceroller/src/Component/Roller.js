import React, { Component } from 'react';

export default class Roller extends Component {
   
    
    render () {
        return (
            <>
            <h1>{this.props.newDiceNumber}</h1>
                <button onClick = {this.props.randomRoll}>
                Click to roll
                </button>
            </>
        )
    }
}
