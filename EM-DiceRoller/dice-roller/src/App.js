import React, { Component } from 'react';
import './App.css';
import Dice from './components/dice'
import Rolls from './components/rolls'
bracket-pair
//created a class 'App' to hold all our logic
class App extends Component {
  constructor(props){
    super(props)
    //we declared our key value pairs and initial values
    this.state = {
      previousRolls: [],
      currentRoll: ""
    }
  }

  //this is the function/method that returns a number between 1-6 and sets it to currentRoll
  handleChange = () => {
    let { currentRoll } = this.state
    let tempNum = Math.ceil(Math.random() * 6)
    this.setState({ currentRoll: tempNum})
  }
  //this is the function/method that pushes the currentRoll into the previousRolls array
  setArray = () => {
    let { currentRoll, previousRolls } = this.state
    let tempArr = previousRolls
    tempArr.push(currentRoll)
    this.setState({previousRolls: tempArr})
  }
  
  //when the user clicks the box, it should call this method.
  onClickFunc = () => {
    this.handleChange();
    this.setArray();
  }

  //attempt to make restart button
  restartButton = () => {
    let { currentRoll, previousRolls } = this.state
    let emptyArr = []
    this.setState({currentRoll: ""})
    this.setState({previousRolls: emptyArr})
  }
  //this renders what we see on the browser
    //Dice shows the box we can click in to get a random number
    //Rolls shows the previous rolls we made.
  render () {
    return (
      <div>
        <Dice 
          roll = { this.onClickFunc }
          currentRoll = { this.state.currentRoll }
        />
        <Rolls 
          previousRolls = { this.state.previousRolls }
        />
        <button onClick = { this.restartButton }>
          Restart
        </button>
      </div>
    )
  }
}
export default App;
