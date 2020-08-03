import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      attendance: 0,
      runningTotal: 0,
      // Wedding
      flowers: true,
      flowersPrice: 600,
      photographer: true,
      photographerPrice: 400,
      weddingFoodCaterer: true,
      weddingFoodCatererPrice: 30, //mult by attendance
      weddingCake: true,
      weddingCakePrice: 500,
      venuePrice: 4000,

      // Birthday
      birthdayFoodCaterer: true,
      birthdayFoodCatererPrice: 20, //mult by attendance
      birthdayCake: true,
      birthdayCakePrice: 50,
      birthdayDecorations: true,
      birthdayDecorationsPrice: 200,
      birthdayEntertainment: true,
      birthdayEntertainmentPrice: 300
    }

      // Graduation 

  }

  render() {
    return (
      <form>
          <h1>Shake&Bake Celebration Planners</h1>

        {/* Celebration Type  */}
          <label for="celebrationType">What kind of celebration are you having?</label>
            <select id="celebrationType" name="celebrationType">
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
            </select>
            <br/>
          
          {/* How many in attendace */}
          <label for="attendance">How many guests are you expecting?</label>
            <select id="attendance" name="attendance">
              <option id = "guests1" value="5-15">5-15</option>
              <option id = "guests2"value="15-35">15-35</option>
              <option id = "guests3" value="35-80">35-80</option>
              <option id = "guests4" value="80-150">80-150</option>
            </select>
          

            {/* <input 
              type= "text"
              value= {this.state.text}
              onChange={()=>{
                
              }} */}
      </form>
    )
  }

}// This end the class


export default App;
