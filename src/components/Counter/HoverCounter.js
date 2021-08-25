import React from 'react';

function ClickCounter({count, incrementCount, theme}) {
    const style = theme === 'dark' ? {backgroundColor: '#000000', color: '#d4de85'} : null;
    return (
        <div>
            <h2 onMouseOver={incrementCount} style={style}>
                Mouse Hover {count} Time
            </h2>
        </div>
    );
}

export default ClickCounter;