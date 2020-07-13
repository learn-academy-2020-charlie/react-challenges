import React, { Component } from 'react';

export default class Rolls extends Component {
    render (){
        return (
            <div>
                 {/* This is the JSX and styling for the previous rolls */}
                <h2>Previous Rolls:</h2>
                <div>
                    { this.props.previousRolls }
                </div>
            </div>
        )
    }
}