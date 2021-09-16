import React, {useReducer} from 'react';

const initialState = 101;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

function Counter() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count - {count}</div>
            <button type="button" onClick={() => {
                dispatch('increment')
            }}>Increment
            </button>
            <br/>
            <button type="button" onClick={() => {
                dispatch('decrement')
            }}>Decrement
            </button>
        </div>
    );
}

export default Counter;
