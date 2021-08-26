import React from 'react';

function ClickCounter({count, incrementCount, theme, switchTheme}) {
    const style = theme === 'dark' ? {backgroundColor: '#000000', color: '#d4de85'} : null;
    console.log('Hover counter Rendered');
    return (
        <div>
            <h2 onMouseOver={incrementCount} style={style}>
                Mouse Hover {count} Time
            </h2>
            <button type='button' onClick={switchTheme}>Switch Theme</button>
        </div>
    );
}

export default ClickCounter;