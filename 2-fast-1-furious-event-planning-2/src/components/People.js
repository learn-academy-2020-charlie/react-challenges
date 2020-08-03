import React, { Component } from 'react';

class People extends Component {
    render(){
        return(
            <>
            <label>
                How many people are in attendance?
                <input
                    type = "number"
                    min = "0"
                    value={ this.props.people }
                    onChange={ this.props.handleChange }
                />
            </label>
        </>
        )
    }
}
export default People;