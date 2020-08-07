import React, { Component } from 'react';

class Budget extends Component {
    render(){
        return(
            <>
            <label>
                What is your budget?
                <select value={this.props.budget} onChange={this.props.handleChange}>
                <option value="under-500">Under $500</option>
                <option value="500-1000">$500-$1,000</option>
                <option value="1000-5000">$1,000-$5,000</option>
                <option value="5000-10000">$5,000-$10,000</option>
                <option value="10000+">$10,000+</option>
                </select>
            </label>
        </>
        )
    }
}
export default Budget;