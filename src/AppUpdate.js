import React from 'react';
// import './App.css';
import './components/Assets/css/global.css'
import LayoutComponentOne from "./components/CustomHook/LayoutComponentOne";
import LayoutComponentTwo from "./components/CustomHook/LayoutComponentTwo";
import Logo from "./components/Logo/Logo";

function AppUpdate() {
    // console.log(window.innerWidth);
    // console.log(window.innerHeight);
    return (
        <div className="App">
            <LayoutComponentOne/>
            <LayoutComponentTwo/>
            <Logo/>
        </div>
    );
}

export default AppUpdate;
