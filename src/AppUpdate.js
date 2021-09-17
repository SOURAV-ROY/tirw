import React from 'react';
import './App.css';
import LayoutComponentOne from "./components/CustomHook/LayoutComponentOne";
import LayoutComponentTwo from "./components/CustomHook/LayoutComponentTwo";

function AppUpdate() {
    // console.log(window.innerWidth);
    // console.log(window.innerHeight);
    return (
        <div className="App">
            <LayoutComponentOne/>
            <LayoutComponentTwo/>
        </div>
    );
}

export default AppUpdate;
