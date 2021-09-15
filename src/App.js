import './App.css'

// import Clock from "./components/Clock/Clock";
// import ClockList from "./components/Clock/ClockList";
// import Form from "./components/Form/Form";
// import Calculator from "./components/Temperature/Calculator";
// import Text from "./components/Inheritance/Text";

import Text from "./components/Composition/Text";
import Emoji from "./components/Composition/AddEmoji";
import Bracket from "./components/Composition/AddBracket";

// HOC Component is here because it is used
// import ClickCounter from "./HOC/ClickCounter";
// import ClickCounter from "./HOC/ClickAndHoverCounter/ClickCounter";
// import MouseOver from "./HOC/MouseOver";
// import HoverCounter from "./HOC/ClickAndHoverCounter/HoverCounter";

import User from "./components/User/User";

/**
 import Counter from "./components/Counter/Counter";
 import ClickCounter from "./components/Counter/ClickCounter";
 import HoverCounter from "./components/Counter/HoverCounter";
 */

/**
 import {Component} from "react";
 import Section from "./components/Counter/Section/Section";
 import ThemeContext from "./contexts/ThemeContext";
 */

/**
 // React Hooks
 import TodoClass from "./components/TodoClass/TodoClass";
 import Todo from "./components/TodoClass/Todo";
 import TodoObject from "./components/TodoClass/TodoObject";
 import CounterCount from "./components/TodoClass/CounterCount";
 */

// import MyClassComponent from "./components/UseEffectHook/MyClassComponent";
import MyFunComponent from "./components/UseEffectHook/MyFunComponent";
import {useState, useCallback, useMemo} from "react";

// MemoCallback Here ****************************
import Title from "./components/MemoCallback/Title";
import ShowCount from "./components/MemoCallback/ShowCount";
import Button from "./components/MemoCallback/Button";
import Form from "./components/UseREF/Form";
import Time from "./components/UseREF/Time";

function App() {
    console.log('App component render');
    // const quantities = [1,2,3];
    const [show, setShow] = useState(true);

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1((prevCount) => prevCount + 1)
    }, []);

    const incrementByFive = useCallback(() => {
        setCount2((prevCount) => prevCount + 5)
    }, []);

    const isEvenOrFalse = useMemo(() => {
        // let i = 0;
        // while (i < 1000000000) i += 1;
        return count1 % 2 === 0;
    }, [count1])

    return (
        <div className="App">

            <Title/>
            <ShowCount count={count1} title='Count 1'/>
            <span>{isEvenOrFalse ? 'Even' : 'Odd'}</span>
            <Button handleClick={incrementByOne}>Increment By One</Button>
            <ShowCount count={count2} title='Count 2'/>
            <Button handleClick={incrementByFive}>Increment By Five</Button>
            <hr/>

            {/*<Clock local='bn-BD'/>*/}
            {/*<Clock/>*/}
            {/*<ClockList quantities={quantities}/>*/}
            {/*<Form/>*/}
            {/*<Calculator/>*/}
            {/*<Text/>*/}
            {/*<AddEmoji>*/}
            {/*    <Text/>*/}
            {/*</AddEmoji>*/}
            {/*<AddEmoji>*/}
            {/*    {({addEmoji}) => <Text addEmoji={addEmoji}/>}*/}
            {/*</AddEmoji>*/}
            <Emoji>
                {({addEmoji}) => (
                    <Bracket>
                        {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket}/>}
                    </Bracket>
                )}
            </Emoji>
            <hr/>
            {/*<ClickCounter/>*/}
            {/*<MouseOver/>*/}
            {/*<HoverCounter/>*/}
            {/*<User name="Sourav Roy"/>*/}
            {/*<User name={() => 'SOURAV ROY'}/>*/}
            <User name={(isLoggedIn) => (isLoggedIn ? 'SOURAV ROY' : 'Guest')}/>

            {/*<Counter>*/}
            {/*    {(counter, incrementCount) => (*/}
            {/*        <ClickCounter count={counter} incrementCount={incrementCount}/>*/}
            {/*    )}*/}
            {/*</Counter>*/}

            {/*<Counter*/}
            {/*    render={(counter, incrementCount) => (*/}
            {/*        <ClickCounter count={counter} incrementCount={incrementCount}/>*/}
            {/*    )}*/}
            {/*/>*/}
            {/*<Counter*/}
            {/*    render={(counter, incrementCount) => (*/}
            {/*        <HoverCounter count={counter} incrementCount={incrementCount}/>*/}
            {/*    )}*/}
            {/*/>*/}
            <div>
                {/*{show && <MyClassComponent/>}*/}
                {show && <MyFunComponent/>}
            </div>
            <button type='button' onClick={() => setShow((prevShow) => !prevShow)}>
                {show ? 'Hide Post' : 'Show Post'}
            </button>
            <Form/>
            <Time/>
        </div>
    );
}


// class App extends Component {
//     state = {
//         theme: 'dark',
//
//         switchTheme: () => {
//             this.setState(({theme}) => {
//
//                 if (theme === 'dark') {
//                     return {
//                         theme: 'light',
//                     }
//                 } else {
//                     return {
//                         theme: 'dark',
//                     }
//                 }
//             })
//         }
//     }
//
//     // switchTheme = () => {
//     //     this.setState(({theme}) => {
//     //
//     //         if (theme === 'dark') {
//     //             return {
//     //                 theme: 'light',
//     //             }
//     //         } else {
//     //             return {
//     //                 theme: 'dark',
//     //             }
//     //         }
//     //     })
//     // }
//
//     render() {
//         const {theme, switchTheme} = this.state;
//         return (
//             <div className="App">
//                 <Counter
//                     render={(counter, incrementCount) => (
//                         <ClickCounter count={counter} incrementCount={incrementCount}/>
//                     )}
//                 />
//
//                 {/*<ThemeContext.Provider value={{theme, switchTheme: this.switchTheme}}>*/}
//                 {/*    /!*<Section theme={theme}/>*!/*/}
//                 {/*    <Section/>*/}
//                 {/*</ThemeContext.Provider>*/}
//
//                 {/*<ThemeContext.Provider value={this.state}>*/}
//                 <ThemeContext.Provider value={{theme, switchTheme}}>
//                     {/*<Section theme={theme}/>*/}
//                     <Section/>
//                 </ThemeContext.Provider>
//
//                 {/*<TodoClass/>*/}
//                 {/*<hr/>*/}
//                 {/*<Todo/>*/}
//                 {/*<hr/>*/}
//                 {/*<TodoObject/>*/}
//                 {/*<CounterCount/>*/}
//                 <hr/>
//             </div>
//         );
//     }
// }

export default App;
