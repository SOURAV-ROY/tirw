import React, {useEffect, useRef, useState} from 'react';

const Time = () => {
    const [date, setDate] = useState(new Date());
    const buttonRef = useRef();

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        // const interval = setInterval(tick, 1000);
        buttonRef.current = setInterval(tick, 1000);

        // Do Cleanup Stop Timer to prevent the timer from running
        return () => {
            // clearInterval(interval);
            clearInterval(buttonRef.current);
        }
    }, [])

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <button type='button' onClick={() => {
                clearInterval(buttonRef.current)
            }}>CleanUp
            </button>
        </div>
    );
};

export default Time;
