import React, { Component } from 'react'
// import { render } from '@testing-library/react';
import Robot1 from './components/Robot1'
import Robot2 from './components/Robot2'
import Robot3 from './components/Robot3'

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      userInput:""
    }
  }

handleChange = (event) => {
  this.state.userInput = event.target.value
  this.setState ({userInput: event.target.value})
}




  render() {
    return(
      <> 
      <h1> Listening Robot </h1>
        <input 
        name= "userInput"
        type= "text"
        onChange= {this.handleChange}
        
        
        ></input>
      <h3>Robot 1</h3>
      <Robot1 userInput={this.state.robotChange}/>
      <h3>Robot 2</h3>
      <h3>Robot 3</h3>

      </>
      )
  }
}
export default App;
