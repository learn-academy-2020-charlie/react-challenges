import React, { Component } from 'react'

class Badrobot extends Component {

    render(){
        return (
            <>
                <label>Bad Robot!</label>
                <p>
                I hear you saying, {this.props.badtext}. Leave me alone.
                </p>
            </>
        )
    }
}

export default Badrobot