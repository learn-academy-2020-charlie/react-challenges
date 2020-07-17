import React, { Component } from 'react';

class Robot2 extends Component {

    blah = (string) => {
        let blah = ["B", "L", "A"]
        let wordArr = string.split("")
        let blahIndex = 0
        let translation = wordArr.map(value => {
            value = blah[blahIndex]
            blahIndex++
            if (blahIndex === 3){
                blahIndex = 0
        }
        
        })
        let translationString = translation.join("")
        console.log(translationString)
        //     // ["h" ,"e" ,"l" ,"l" ,"o"]
        // })
        this.setState({ userInput : translationString })

        // if i % 3
    }

    render(){

        

        return(
            <React.Fragment>
                <h2>The Bad Robot:</h2>
                <p> { this.blah(this.props.userInput) } </p>
            </React.Fragment>
        )
    }
}

export default Robot2