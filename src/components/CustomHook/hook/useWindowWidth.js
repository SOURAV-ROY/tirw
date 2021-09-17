import {useCallback} from "react";

const {useEffect, useState} = require("react");


const useWindowWidth = (screenSize) => {
    const [smallScreen, setSmallScreen] = useState(false);

    // const checkScreenSize = () => {
    //     setSmallScreen(window.innerWidth < 786);
    // }

    const checkScreenSize = useCallback(() => {
        setSmallScreen(window.innerWidth < screenSize);
    }, [screenSize]);

    useEffect(() => {
        // const checkScreenSize = () => {
        //     setSmallScreen(window.innerWidth < screenSize);
        // }
        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        }
    }, [checkScreenSize])
    // }, [screenSize])

    return smallScreen;
}

export default useWindowWidth;
