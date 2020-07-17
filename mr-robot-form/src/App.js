import React, { Component } from 'react';
import './App.css';
import Robot1 from './components/Robot1'
import Robot2 from './components/Robot2'
import Robot3 from './components/Robot3'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        userInput: "",
        robot2: ""
      }
  }

  handleChange = (event) => {
    this.state[event.target.name] = event.target.value
    this.setState({ userInput: this.state.userInput })
  }

  render() {
    return(
      <React.Fragment>
        <input
        type="text"
        onChange={ this.handleChange }
        name="userInput"
        value= { this.state.userInput }
        />
        <Robot1 
        userInput = { this.state.userInput }
        />
        <Robot2 
        userInput = { this.state.userInput }
        />
        <Robot3 
        userInput = { this.state.userInput }
        />
      </React.Fragment>
    )
  }
}


export default App;
