import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <div>
            <ol>
                <li>
                    <NavLink to="/hello" activeClassName={classes.active}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/posts" activeClassName={classes.active}>
                        Posts
                    </NavLink>
                </li>
            </ol>
        </div>
    );
}

export default Header;