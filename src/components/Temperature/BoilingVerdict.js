import React from 'react';

const BoilingVerdict = ({celsius = 0, fahrenheit = 0}) => {
    if (celsius >= 100) {
        return <p>Boil water</p>
    } else {
        return <p>Not Boil Water</p>
    }
};

export default BoilingVerdict;