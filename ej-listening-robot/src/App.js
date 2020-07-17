import React, {Component} from 'react';
import './App.css';
import Robo1 from './components/Robo1'
import Robo2 from './components/Robo2'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { 
      userEntry: ""
    }
  }
  handleChange = (event) => {
    this.setState ({ userEntry: event.target.value})
  } 
  render(){
    return (
      <div>
        <h1>Robo Active Listening</h1>
        <p> Type Something! </p>
        
      <input
      value = {this.state.userEntry}
      onChange = {this.handleChange}
      />
      <br/>
      <Robo1 
        userEntry = {this.state.userEntry}
      />
      <br/>
      <Robo2
        userEntry = {this.state.userEntry}
      />
      </div>
    )
  }
}

export default App;
