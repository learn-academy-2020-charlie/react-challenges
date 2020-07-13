import React, { Component } from 'react';

export default class Dice extends Component{
    render (){
      return (
        <div>
            {/* This is the JSX for the box to roll the dice when clicked and instructions to roll the dice */}
              <h2 onClick={ this.props.roll } style =  {{width: 50, height: 50, border: '1px solid black'}}>
                { this.props.currentRoll }
              </h2>
              <h3>
                  Click box to roll dice.
              </h3>
        </div>
      )
    }
}