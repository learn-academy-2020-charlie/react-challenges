import React, { Component } from 'react';

class Robot2 extends Component {

    badListening = (string) => {
        let badArray = string.split("").map((value, index) => {
            if(index % 3 === 0){
                return "B"
            } else if (1 % 3 === 1){
                return "L"
            } else if (2 % 3 === 2){
                return "A"
            }
        })
        return badArray.join("")
    }

  






    render(){
    // console.log(this.blah);
        return(

            <React.Fragment>
                <h2>The Bad Robot: </h2>
                {/* <p>{this.blah}</p> */}
                {/* <p> { this.props.userInput } </p> */}
                <p> { this.badListening (this.props.userInput) } </p>

            </React.Fragment>
        )
    }
}

export default Robot2