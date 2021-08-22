import React from 'react';
import withCounter from './withCounter';

function ClickCounter(props) {
    const {count, incrementCount} = props;
    return (
        <div>
            <button type='button' onClick={incrementCount}>Click {count} Time</button>
        </div>
    );
}

export default withCounter(ClickCounter);