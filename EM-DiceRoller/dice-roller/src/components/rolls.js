import React, { Component } from 'react';

export default class Rolls extends Component {
    render (){
        return (
            <div>
                 {/* This is the JSX and styling for the previous rolls */}
                <h3>Previous Rolls:</h3>
                <div>
                    { this.props.previousRolls }
                </div>
            </div>
        )
    }
}