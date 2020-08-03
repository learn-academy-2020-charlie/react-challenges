import React, { Component } from 'react';
import './App.css';
import Event from './components/Event.js'
import Budget from './components/Budget.js'
import People from './components/People.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      event: "",
      budget: "",
      people: "0"
    }
  }
  handleChange = (e) => {
    this.setState({ event: e.target.value })
  }
  handleChange2 = (e) => {
    this.setState({ budget: e.target.value })
  }
  handleChange3 = (e) => {
    this.setState({ people: e.target.value })
  }

  calculateResults = {
    //

  }

  render(){
    return(
      <>
      <h1>2 Fast 2 Furious Event Planning</h1>
      <br></br>
      <Event
      event = {this.state.event}
      handleChange = {this.handleChange}/>
      <br></br>
      <Budget
      budget = {this.state.budget}
      handleChange = {this.handleChange2}/>
      <br></br>
      <People
      people = {this.state.people}
      handleChange = {this.handleChange3}/>
      <br/>
      <button onClick={this.calculateResults}>VIEW RESULTS</button>
      <h2>Results</h2>
      <h4>Event Type: </h4>
      <h5>{this.state.event}</h5>
      <h4>Budget </h4>
      <h5>{this.state.budget}</h5>
      <h4>Guest List</h4>
      <h5>{this.state.people}</h5>

      </>
    )

  }
}

export default App;
