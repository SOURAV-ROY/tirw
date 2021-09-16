import React, {useReducer} from 'react';

const initialState = 101;
const initialState2 = 202;
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

function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState2);

    return (
        <div>
            <div>
                <div>Another Count - {count}</div>
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
            <div>
                <div>Another Count - {count2}</div>
                <button type="button" onClick={() => {
                    dispatch2('increment')
                }}>Increment
                </button>
                <br/>
                <button type="button" onClick={() => {
                    dispatch2('decrement')
                }}>Decrement
                </button>
            </div>
        </div>
    );
}

export default CounterThree;
