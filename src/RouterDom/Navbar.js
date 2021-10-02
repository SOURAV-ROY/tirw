import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink
                    exact
                    to="/"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "red"
                    }}
                >Home
                </NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/about"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >About</NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/services"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >Services</NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/posts/js/react"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >JavaScript -> React</NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/dashboard"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "blue"
                        }}
                    >Dashboard</NavLink>
                </li>
                <li>
                    <NavLink
                        exact
                        to="/login"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "purple"
                        }}
                    >Login</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
