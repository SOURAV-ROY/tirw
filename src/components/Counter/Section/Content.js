import React from 'react';
import HoverCounter from "../HoverCounter";
import Counter from "../Counter";
import ThemeContext from "../../../contexts/ThemeContext";

function Content() {
    return (
        <div>
            <h1>This is content component</h1>
            {/*<Counter*/}
            {/*    render={(counter, incrementCount) => (*/}
            {/*        <HoverCounter count={counter} incrementCount={incrementCount} theme={theme}/>*/}
            {/*    )}*/}
            {/*/>*/}
            <Counter
                render={(counter, incrementCount) => (
                    <ThemeContext.Consumer>
                        {({theme}) => <HoverCounter
                            count={counter}
                            incrementCount={incrementCount}
                            theme={theme}
                        />}
                    </ThemeContext.Consumer>
                )}
            />
        </div>
    );
}

export default Content;