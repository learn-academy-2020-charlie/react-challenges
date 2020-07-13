import React, { Component } from 'react';


export default class App extends Component {
  constructor (props){
    super (props)
    this.state = {
      dice: ["1", "2", "3", "4", "5", "6"]
    }
  }
    random = () => {
      return Math.floor(Math.random(this.state.dice)) * 6
    }
  render () {
    return (
      <>
      <h1>Dice Roller</h1>
      <Roller roll = {this.random}

      />

      {/* use a div to create a box of the current roll outcome */}

      </>
    )
  }
}
