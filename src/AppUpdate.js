import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Home from "./RouterDom/Home";
import About from "./RouterDom/About";
import Services from "./RouterDom/Services";
import Navbar from "./RouterDom/Navbar";
import ErrorPage from "./RouterDom/ErrorPage";
import Posts from "./RouterDom/Posts";
import Dashboard from "./RouterDom/Dashboard";
// import {ThemeProvider} from 'styled-components';
// import './App.css';
// import './components/Assets/css/global.css'
// import LayoutComponentOne from "./components/CustomHook/LayoutComponentOne";
// import LayoutComponentTwo from "./components/CustomHook/LayoutComponentTwo";
// import Logo from "./components/Logo/Logo";

// import StyledComponents from "./components/StyledComponents/StyledComponents";

// import GlobalStyle from "./components/StyledComponents/styles/Global.styles";

function AppUpdate() {
    // console.log(window.innerWidth);
    // console.log(window.innerHeight);
    const isLoggedIn = true;
    return (
        <>
            {/*<div className="App">*/}
            {/*<LayoutComponentOne/>*/}
            {/*<LayoutComponentTwo/>*/}
            {/*<Logo/>*/}
            {/*<GlobalStyle/>*/}
            {/*<ThemeProvider theme='dark'>*/}
            {/*<StyledComponents/>*/}
            {/*</ThemeProvider>*/}
            {/*</div>*/}
            <Router>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/dashboard' component={Dashboard}/>

                    {/*<Route exact path='/services' component={Services}/>*/}
                    {/*<Route exact path='/services' render={() => <Services number='100'/>}/>*/}

                    <Route exact path='/services'>
                        <Services number='10'/>
                    </Route>

                    <Route exact path='/posts/:category/:topic' component={Posts}/>

                    <Route exact path='/login'>
                        {isLoggedIn ? <Redirect to='/dashboard'/> : <Home/>}
                    </Route>

                    <Route component={ErrorPage}/>

                </Switch>
            </Router>
        </>
    );
}

export default AppUpdate;
