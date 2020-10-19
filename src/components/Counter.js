import React, { Component } from 'react';

class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementMethod(){
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
                count - {this.state.count}
                <button onClick={() => this.incrementMethod()}>Increment</button>
            </div>
        );
    }
}

export default Counter;