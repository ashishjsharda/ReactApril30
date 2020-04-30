import React, { Component } from 'react';
class Clock extends Component {
    constructor(props)
    {
        super(props);
        this.state={date:new Date()};
    }
    render() { 
        return ( <div>
            <h1> This is an example using state</h1>
            <h1> Time now is {this.state.date.toLocaleTimeString()}</h1>
        </div> );
    }
}
 
export default Clock;