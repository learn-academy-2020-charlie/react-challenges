import React, { Component } from 'react';

export default class Dice extends Component{
    render (){
      return (
        <div>
            {/* This is the JSX for the box to roll the dice when clicked and instructions to roll the dice */}
            <div 
                onClick={ this.props.roll }
                style =  {{ margin: "auto"}}>
              <h2 style =  {{width: 100, height: 100, border: '1px solid black', margin: "auto"}}>
                { this.props.currentRoll }
              </h2>
              <h3>
                  Click box to roll dice.
              </h3>
            </div>
        </div>
      )
    }
}