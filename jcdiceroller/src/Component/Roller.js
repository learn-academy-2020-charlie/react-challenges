import React, { Component } from 'react';

export default class Roller extends Component {
    constructor (props){
        super (props)
    }
    render () {
        return (
            <>
                <button onClick = {this.props.random}>
                Click to roll
                </button>
            </>
        )
    }
}

