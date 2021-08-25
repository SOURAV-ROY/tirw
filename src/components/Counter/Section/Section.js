import React from 'react';
import Content from "./Content";

function Section() {
    return (
        <div>
            <h1>This is section component</h1>
            {/*<Content theme={theme}/>*/}
            <Content/>
        </div>
    );
}

export default Section;