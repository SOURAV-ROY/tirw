import React, {useContext} from 'react';
import HoverCounter from "../HoverCounter";
import Counter from "../Counter";
import ThemeContext from "../../../contexts/ThemeContext";

function Content() {

    const context = useContext(ThemeContext);
    const {theme, switchTheme} = context;

    console.log(context);
    console.log('Content rendered');

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
                    <HoverCounter
                        count={counter}
                        incrementCount={incrementCount}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            />
            {/*<Counter*/}
            {/*    render={(counter, incrementCount) => (*/}
            {/*        <ThemeContext.Consumer>*/}
            {/*            {({theme, switchTheme}) => <HoverCounter*/}
            {/*                count={counter}*/}
            {/*                incrementCount={incrementCount}*/}
            {/*                theme={theme}*/}
            {/*                switchTheme={switchTheme}*/}
            {/*            />}*/}
            {/*        </ThemeContext.Consumer>*/}
            {/*    )}*/}
            {/*/>*/}
        </div>
    );
}

export default Content;