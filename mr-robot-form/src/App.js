import React, { Component } from 'react';
import Robot1 from './components/Robot1'
import Robot2 from './components/Robot2'
import Robot3 from './components/Robot3'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        userInput: ""
      }
  }

  handleChange = (e) => {
    // this.state[e.target.name] = e.target.value
    // this.setState({ userInput: this.state.userInput })
    this.setState({ userInput: e.target.value })
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
