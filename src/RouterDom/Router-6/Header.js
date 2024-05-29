import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <ol>
                <li>
                    {/*<NavLink to="/hello" className={(navInfo) => console.log(navInfo)}>*/}
                    <NavLink to="/hello"
                             className={(navInfo) => (
                                 navInfo.isActive ? classes.active : ""
                             )}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/posts"
                             className={(navInfo) => (
                                 navInfo.isActive ? classes.active : ""
                             )}>
                        Posts
                    </NavLink>
                </li>
            </ol>
        </div>
    );
}

export default Header;