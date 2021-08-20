import React from 'react';
import Clock from "./Clock";

const ClockList = ({quantities = []}) => {
    return (
        <div>
            {/*{[<Clock/>, <Clock/>, <Clock/>]}*/}
            {/*{quantities.map(() => (<Clock key={Math.random()}/>))}*/}
            {quantities.map((key) => (<Clock key={key}/>))}
        </div>
    );
};

export default ClockList;