import React, {useReducer} from 'react';

const initialState = {
    counter: 10,
    counter2: 1000,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            // return {counter: state.counter + 1};
            return {...state, counter: state.counter + action.value};
        case 'decrement':
            // return {counter: state.counter - 1};
            return {...state, counter: state.counter - action.value};
        case 'increment2':
            return {...state, counter2: state.counter2 + action.value};
        case 'decrement2':
            return {...state, counter2: state.counter2 - action.value};
        default:
            return state;
    }
};

function ComplexCounter() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Complex Count - {count.counter}</div>
            <button type="button" onClick={() => {
                dispatch({
                    type: 'increment',
                    value: 1,
                })
            }}>Increment By 1
            </button>
            {/*<button type="button" onClick={() => {*/}
            {/*    dispatch({*/}
            {/*        type: 'increment',*/}
            {/*        value: 5,*/}
            {/*    })*/}
            {/*}}>Increment By 5*/}
            {/*</button>*/}
            <br/>
            <button type="button" onClick={() => {
                dispatch({
                    type: 'decrement',
                    value: 1,
                })
            }}>Decrement By 1
            </button>
            {/*<button type="button" onClick={() => {*/}
            {/*    dispatch({*/}
            {/*        type: 'decrement',*/}
            {/*        value: 5,*/}
            {/*    })*/}
            {/*}}>Decrement By 5*/}
            {/*</button>*/}

            <div>Complex Count2 - {count.counter2}</div>
            <button type="button" onClick={() => {
                dispatch({
                    type: 'increment2',
                    value: 5,
                })
            }}>Increment By 5
            </button>
            <br/>
            <button type="button" onClick={() => {
                dispatch({
                    type: 'decrement2',
                    value: 5,
                })
            }}>Decrement By 5
            </button>
        </div>
    );
}

export default ComplexCounter;
