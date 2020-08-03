import React, { Component } from 'react'

class Robot1 extends Component {
    constructor(props){
      super(props)
    }
    robotChange = () => {
      this.props.handleChange(this.props.name)
    }

    render(){


      return(
        <> 
        <p> {this.robotChange}</p>
        </>
      )
  }
}
  export default Robot1;