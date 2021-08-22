import React, {Component} from 'react';

class MouseOver extends Component {
    state = {
        count: 0
    }
    incrementCount = () => {
        this.setState((prevState) => ({count: prevState.count + 1}));
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <h1 onMouseOver={this.incrementCount}>Mouse Hover {count} Time</h1>
            </div>
        );
    }
}

export default MouseOver;