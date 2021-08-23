import React from 'react';

function ClickCounter({count, incrementCount}) {

    return (
        <div>
            <h2 onMouseOver={incrementCount}>Mouse Hover {count} Time</h2>
        </div>
    );
}

export default ClickCounter;