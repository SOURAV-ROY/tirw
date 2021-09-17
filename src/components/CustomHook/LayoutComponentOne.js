import React, {useEffect, useState} from 'react';

function LayoutComponentOne() {
    const [smallScreen, setSmallScreen] = useState(false);

    const checkScreenSize = () => {
        setSmallScreen(window.innerWidth < 786);
    }
    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        }

    }, [])

    return (
        <div>
            <h2>You are browsing on {smallScreen ? 'Small' : 'Large'} Screen</h2>
        </div>
    );
}

export default LayoutComponentOne;
