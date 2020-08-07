import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      ip: "",
      city: "",
      lat: "",
      lon: "",
      main: "",
      description: ""
    }
  }

  getIP = () => {
    fetch("https://ipapi.co/json")
    // higher order function
    .then((response)=> {
      if (response.status === 200){
        return response.json()
      }
    })
    .then((payload)=> {
      console.log(payload);
      this.setState({ ip: payload.ip, city: payload.city, lat: payload.latitude, lon: payload.longitude })
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  getWeather = () => {
    fetch(`api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=2f5655806cc185c3d744eb0975989895`)
    // higher order function
    .then((response)=> {
      if (response.status === 200){
        return response.json()
      }
    })
    .then((payload)=> {
      console.log(payload);
      this.setState({ main: payload.weather.main, description: payload.weather.description })
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  render(){
    return(
      <React.Fragment>
          <h1>IP Retriever</h1>
          <button onClick={ this.getIP }>
            Get IP
          </button>
          <button onClick={ this.getWeather }>
            Get Weather
          </button>
          <p>{ this.state.ip }</p>
          <p>{ this.state.city }</p>
          <p>{ this.state.main }</p>
          <p>{ this.state.description }</p>
      </React.Fragment>
    )
  }
}

export default App;

