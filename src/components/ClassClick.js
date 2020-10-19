import React, { Component } from 'react';

class ClassClick extends Component {

    clickHandler() {
        alert("Button Clicked")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Class Click Event</button>
            </div>
        );
    }
}

export default ClassClick;