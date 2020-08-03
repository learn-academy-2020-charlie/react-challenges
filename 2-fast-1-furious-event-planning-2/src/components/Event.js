import React, { Component } from 'react';

class Event extends Component {
    render(){
        return(
            <>
            <label>
            What kind of event are you planning?
            <select value={this.props.event} onChange={this.props.handleChange}>
            <option value="Wedding">Wedding</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="Baby Shower">Baby Shower</option>
            <option value="Graduation">Graduation</option>
            <option value="Team Building">Team Building</option>
            </select>
        </label>
        </>
        )
    }
}
export default Event;