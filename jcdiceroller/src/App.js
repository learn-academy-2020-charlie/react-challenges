import React, { Component } from 'react';
import Roller from './Component/Roller'
import Log from './Component/Log'
import './App.css'

import one from '/Users/learnacademy/Desktop/react-challenges/jcdiceroller/src/dice-1.png'

import two from '/Users/learnacademy/Desktop/react-challenges/jcdiceroller/src/dice-1.png'

import three from '/Users/learnacademy/Desktop/react-challenges/jcdiceroller/src/dice-1.png'

import four from '/Users/learnacademy/Desktop/react-challenges/jcdiceroller/src/dice-1.png'

import five from '/Users/learnacademy/Desktop/react-challenges/jcdiceroller/src/dice-1.png'

import six from '/Users/learnacademy/Desktop/react-challenges/jcdiceroller/src/dice-1.png'






export default class App extends Component {
  constructor (props){
    super (props)
    this.state = {
      logArray: [],
      diceNumber: "",
      dice: ["1", "2", "3", "4", "5", "6"],
      // dice1: '/Users/learnacademy/Desktop/react-challenges/jcdiceroller/src/dice-1.png'
    }
  }



    handleChange = () => {
      let { dice, diceNumber, dice1 } = this.state
      let randomMath =  dice[Math.floor(Math.random() * 6)]
      console.log(this.setState({ diceNumber: randomMath}));

      this.setState({logArray: [...this.state.logArray, randomMath]})
      console.log(this.state.diceNumber);

      // let diceImage = dice1
      // console.log(diceImage);
      
      
      this.state.logArray.map((value, index) => <diceImage diceNumber={diceNumber} key={index} />);
    }
    
    diceImage = () => {
      let { diceNumber } = this.state
      if (diceNumber === 1) {
        return <img className="dice-image" src={one} alt="1" />;
      } else if (diceNumber === 2) {
        return <img className="dice-image" src={two} alt="2" />;
      } else if (diceNumber === 3) {
        return <img className="dice-image" src={three} alt="3" />;
      } else if (diceNumber === 4) {
        return <img className="dice-image" src={four} alt="4" />;
      } else if (diceNumber === 5) {
        return <img className="dice-image" src={five} alt="5" />;
      } else if (diceNumber === 6) {
        return <img className="dice-image" src={six} alt="6" />;
      }
    }
    
     
    

  render () {
    return (
      <>



      <div>
      
      <h1>Dice Roller</h1>

      {/* <img src={ require('/Users/learnacademy/Desktop/react-challenges/jcdiceroller/src/dice-1.png') } /> */}

      <Roller 
        diceImage = {this.diceImage}

        randomRoll = { this.handleChange } 
        newDiceNumber = {this.state.diceNumber}
      />
      
      <Log 
        newLog2 = { this.state.logArray}
      />
      </div>

      </>
    )
  }
}






