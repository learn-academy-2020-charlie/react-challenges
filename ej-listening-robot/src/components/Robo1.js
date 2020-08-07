import React, {Component} from 'react'

class Robo1 extends Component{


    
    render() {
        return(
            <div>
            <h2> Good Robot</h2>
            <h3> I hear you saying {this.props.userEntry}. Is that correct?</h3>
            </div>
        )
    }
}
export default Robo1