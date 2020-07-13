import React, { Component } from 'react';
import Roller from './Component/Roller'
import Log from './Component/Log'
export default class App extends Component {
  constructor (props){
    super (props)
    this.state = {
      logArray: [],
      diceNumber: "",
      dice: ["1", "2", "3", "4", "5", "6"]
    }
  }
    handleChange = () => {
      let { dice } = this.state
      let randomMath =  dice[Math.floor(Math.random() * 6)]
      let display =  `${randomMath}`
      return this.setState({ diceNumber: display})
    }

    numberList = () => {
      let { logArray, diceNumber} = this.state
      let newVar = logArray.push(diceNumber)
      let display2 = `${newVar}`
      return this.setState({logArray: display2})
   }
  render () {
    return (
      <>
      {/* use a div to create a box of the current roll outcome */}
      <div>
      <h1>Dice Roller</h1>
      <Roller 
      randomRoll = { this.handleChange } 
      newDiceNumber = {this.state.diceNumber}
      />

      
      <Log
        // newLog = { this.numberList }
        newLog2 = { this.state.logArray}
      />
      </div>

      </>
    )
  }
}
