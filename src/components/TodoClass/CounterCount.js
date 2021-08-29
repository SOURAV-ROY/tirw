import React, {useState} from 'react';

const CounterCount = () => {
    const [count, setCount] = useState(0);

    let i = 0;
    const addFive = () => {
        while (i < 5) {
            setCount((prevState) => prevState + 1)
            i = i + 1;
        }
    }
    return (
        <div>
            <h3>{count}</h3>
            {/*<button type='button' onClick={() => setCount(count + 1)}>ADD 1</button>*/}
            <button
                type='button'
                onClick={
                    () => setCount((prevState) => prevState + 1)
                }>ADD 1
            </button>
            <br/>
            <button
                type='button'
                onClick={addFive}>ADD 5
            </button>
        </div>
    );
};

export default CounterCount;