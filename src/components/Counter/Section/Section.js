import React, {Component} from 'react';
import Content from "./Content";

class Section extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return true;
    }

    render() {
        console.log('Section rendered');
        return (
            <div>
                <h1>This is section component</h1>
                {/*<Content theme={theme}/>*/}
                <Content/>
            </div>
        );
    }
}

export default Section;