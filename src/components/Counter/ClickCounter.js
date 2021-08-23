import React from 'react';

function ClickCounter({count, incrementCount}) {

    return (
        <div>
            <button type='button' onClick={incrementCount}>Click {count} Time</button>
        </div>
    );
}

export default ClickCounter;