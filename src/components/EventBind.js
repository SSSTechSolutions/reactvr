import React, { Component } from 'react';

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello Man'
        }
    }
    
    clickHandler() {
        this.setState({
            message: 'Good Bye'
        })
    }

    render() {
        return (
            <div>
                {this.state.message}
                {/* <button onClick={this.clickHandler.bind(this)}>Bind On Click</button> */}
                <button onClick={() => this.clickHandler()}>Bind On Click</button>
            </div>
        );
    }
}

export default EventBind;