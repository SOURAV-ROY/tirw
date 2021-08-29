import './App.css'
/**
 // import Clock from "./components/Clock/Clock";
 import ClockList from "./components/Clock/ClockList";
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
 */
import Counter from "./components/Counter/Counter";
import ClickCounter from "./components/Counter/ClickCounter";
// import HoverCounter from "./components/Counter/HoverCounter";
import {Component} from "react";
import Section from "./components/Counter/Section/Section";
import ThemeContext from "./contexts/ThemeContext";

// React Hooks
import TodoClass from "./components/TodoClass/TodoClass";
import Todo from "./components/TodoClass/Todo";
import TodoObject from "./components/TodoClass/TodoObject";
import CounterCount from "./components/TodoClass/CounterCount";

// function App() {
//     console.log('App component render');
//     const quantities = [1];
//     return (
//         <div className="App">
//             <h1>Hello Sourav</h1>
//             {/*<Clock local='bn-BD'/>*/}
//             {/*<Clock/>*/}
//             <ClockList quantities={quantities}/>
//             {/*<Form/>*/}
//             {/*<Calculator/>*/}
//             {/*<Text/>*/}
//             {/*<AddEmoji>*/}
//             {/*    <Text/>*/}
//             {/*</AddEmoji>*/}
//             {/*<AddEmoji>*/}
//             {/*    {({addEmoji}) => <Text addEmoji={addEmoji}/>}*/}
//             {/*</AddEmoji>*/}
//             <Emoji>
//                 {({addEmoji}) => (
//                     <Bracket>
//                         {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket}/>}
//                     </Bracket>
//                 )}
//             </Emoji>
//             <hr/>
//             {/*<ClickCounter/>*/}
//             {/*<MouseOver/>*/}
//             {/*<HoverCounter/>*/}
//             {/*<User name="Sourav Roy"/>*/}
//             {/*<User name={() => 'SOURAV ROY'}/>*/}
//             <User name={(isLoggedIn) => (isLoggedIn ? 'SOURAV ROY' : 'Guest')}/>
//
//             {/*<Counter>*/}
//             {/*    {(counter, incrementCount) => (*/}
//             {/*        <ClickCounter count={counter} incrementCount={incrementCount}/>*/}
//             {/*    )}*/}
//             {/*</Counter>*/}
//             <Counter
//                 render={(counter, incrementCount) => (
//                     <ClickCounter count={counter} incrementCount={incrementCount}/>
//                 )}
//             />
//             <Counter
//                 render={(counter, incrementCount) => (
//                     <HoverCounter count={counter} incrementCount={incrementCount}/>
//                 )}
//             />
//         </div>
//     );
// }

class App extends Component {
    state = {
        theme: 'dark',

        switchTheme: () => {
            this.setState(({theme}) => {

                if (theme === 'dark') {
                    return {
                        theme: 'light',
                    }
                } else {
                    return {
                        theme: 'dark',
                    }
                }
            })
        }
    }

    // switchTheme = () => {
    //     this.setState(({theme}) => {
    //
    //         if (theme === 'dark') {
    //             return {
    //                 theme: 'light',
    //             }
    //         } else {
    //             return {
    //                 theme: 'dark',
    //             }
    //         }
    //     })
    // }

    render() {
        const {theme, switchTheme} = this.state;
        return (
            <div className="App">
                <Counter
                    render={(counter, incrementCount) => (
                        <ClickCounter count={counter} incrementCount={incrementCount}/>
                    )}
                />

                {/*<ThemeContext.Provider value={{theme, switchTheme: this.switchTheme}}>*/}
                {/*    /!*<Section theme={theme}/>*!/*/}
                {/*    <Section/>*/}
                {/*</ThemeContext.Provider>*/}

                {/*<ThemeContext.Provider value={this.state}>*/}
                <ThemeContext.Provider value={{theme, switchTheme}}>
                    {/*<Section theme={theme}/>*/}
                    <Section/>
                </ThemeContext.Provider>
                <TodoClass/>
                <hr/>
                <Todo/>
                <hr/>
                <TodoObject/>
                <CounterCount/>
                <hr/>
            </div>
        );
    }
}

export default App;