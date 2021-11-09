import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from "./RouterDom/Router-6/Header";
import Hello from "./RouterDom/Router-6/Hello";
import Posts from "./RouterDom/Router-6/Posts";
import Post from "./RouterDom/Router-6/Post";

function AppUpdate() {

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/hello"/>
                </Route>
                <Route path="/hello">
                    <Hello/>
                </Route>
                <Route path="/posts" exact>
                    <Posts/>
                </Route>
                <Route path="/posts/:postId">
                    <Post/>
                </Route>
            </Switch>
        </div>
    );
}

export default AppUpdate;
