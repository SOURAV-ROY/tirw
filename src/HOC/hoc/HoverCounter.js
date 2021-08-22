import React from 'react';
import withCounter from './withCounter';

function HoverCounter(props) {
    const {count, incrementCount} = props;
    return (
        <div>
            <h2 onMouseOver={incrementCount}>Click {count} Time</h2>
        </div>
    );
}

export default withCounter(HoverCounter);