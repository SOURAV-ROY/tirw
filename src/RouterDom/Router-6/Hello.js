import React from 'react';

import {Outlet} from "react-router-dom";

function Hello() {
    return (
        <div>
            <h1>Hello</h1>
            <Outlet/>
            <p>This is the home page</p>
            <Outlet/>
            {/*<Routes>*/}
            {/*    <Route path="world" element={<p>This is world !</p>}/>*/}
            {/*</Routes>*/}
        </div>
    );
}

export default Hello;