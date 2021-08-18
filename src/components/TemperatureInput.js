import React from 'react';

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit',
}

function TemperatureInput({scale, temperature, onTemperatureChange}) {
    return (
        <div>
            <fieldset>
                <legend>Enter Temperature in {scaleName[scale]}</legend>
                {/*<input type="text" value={temperature} onChange={onTemperatureChange}/>*/}
                <input
                    type="text"
                    value={temperature}
                    onChange={(e) => onTemperatureChange(e, scale)}
                />
            </fieldset>
        </div>
    );
}

export default TemperatureInput;