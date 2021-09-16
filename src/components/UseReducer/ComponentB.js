import React, {useContext} from 'react';
import {counterContext} from "../../App";

function ComponentB() {
    const countContext = useContext(counterContext);

    return (
        <div>
            {/*<h1>Component B</h1>*/}
            <button type="button" onClick={() => {
                countContext.countDispatch('increment')
            }}>Increment
            </button>
            <br/>
            <button type="button" onClick={() => {
                countContext.countDispatch('decrement')
            }}>Decrement
            </button>
        </div>
    );
}

export default ComponentB;
