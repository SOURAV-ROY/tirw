import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Header from "./RouterDom/Router-6/Header";
import Hello from "./RouterDom/Router-6/Hello";
import Posts from "./RouterDom/Router-6/Posts";
import Post from "./RouterDom/Router-6/Post";

function AppUpdate() {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/hello"/>}/>

                <Route path="/hello/*" element={<Hello/>}>
                    <Route path="world" element={<p>This is world !</p>}/>
                </Route>

                <Route path="/posts/*" element={<Posts/>}/>

                <Route path="/posts/:postId" element={<Post/>}/>

            </Routes>
        </div>
    );
}

export default AppUpdate;
