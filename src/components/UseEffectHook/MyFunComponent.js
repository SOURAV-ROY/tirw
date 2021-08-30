import React, {useEffect, useState} from 'react';

const MyFunComponent = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [text, setText] = useState('');

    const tick = () => {
        console.log('Clock Ticking');
        setDate(new Date());
    }

    useEffect(() => {
        console.log('Update document title');
        document.title = `Clicked ${count} Times`;

    }, [count]);

    useEffect(() => {
        console.log('Time Use Effect');
        const interval = setInterval(tick, 1000);

        // Do Cleanup Stop Timer to prevent the timer from running
        return () => {
            console.log('Component Unmount From FunComponent');
            clearInterval(interval);
        }

    }, [])

    const addClick = () => {
        setCount((prevState) => prevState + 1);
    }

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>{text}</p>
            <p>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </p>
            <p>
                <button type='button' onClick={addClick}>Click</button>
            </p>
        </div>
    );
};

export default MyFunComponent;
