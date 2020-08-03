import React, { Component } from 'react'

class Goodrobot extends Component {

    render(){
        return (
            <>
                <label>Good Robot!</label>
                <p>
                I hear you saying, "{this.props.text}." Is that correct?
                </p>
            </>
        )
    }
}

export default Goodrobot