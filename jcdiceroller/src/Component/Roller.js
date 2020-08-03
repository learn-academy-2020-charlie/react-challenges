import React, { Component } from 'react';


export default class Roller extends Component {
   
    
    render () {
        return (
            <>

            {/* <p>{this.props.diceImage}</p> */}

            <div>
            <h1>{this.props.newDiceNumber}</h1>


                <button onClick = {this.props.randomRoll} class = "myButton1">
                Click to roll
                </button>

            <h1>{this.props.diceImage}</h1>
            </div>
            </>
        )
    }
}
