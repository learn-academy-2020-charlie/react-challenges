import React, {Component} from 'react';
import Goodrobot from './components/Goodrobot';
import Badrobot from './components/Badrobot';
import Mathewrobot from './components/Mathewrobot';
import './App.css';

class App extends Component {
  constructor (props){
    super (props)
    this.state = {
      text: "",
      badtext:""
    }
  }

  handleChange = (event) => {
    this.setState({ text: event.target.value })
  }

    blahBlah= (event) => {
      let textLength = event.target.value.length
      for (let i=0; i<textLength; i++){
        this.setState({badtext: this.state.badtext.push("blah")})
    }
  }


  render () {
    return (
      <>
        <form>
          <label>Say something to our robots</label>
            <input 
              type= "text"
              value= {this.state.text}
              onChange={()=>{
                this.handleChange();
                this.blahBlah();
              }}
            />
        </form>
        
        <Goodrobot 
          text={this.state.text}
        />
        <Badrobot 
          badtext={this.state.badtext}
        />
        <Mathewrobot 
          text={this.state.text}
        />
      </>
    )
  }

}

export default App;
