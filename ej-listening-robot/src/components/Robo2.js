import React, {Component} from 'react'

class Robo2 extends Component{


    badRoboResponse = (string) => {
        for (let index = 0; index < string.length; index++) {
            let newString = string.replace(string.charAt(index), "B")
            
            return newString
        }
    }
    render() {
        return(
            <div>
            <h2> Bad Robot</h2>
            <h3> I hear you saying {this.badRoboResponse(this.props.userEntry)}. Is that correct?</h3>
            </div>
        )
    }
}
export default Robo2