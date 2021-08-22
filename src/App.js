import './App.css';
// import Clock from "./components/Clock/Clock";
import ClockList from "./components/Clock/ClockList";
// import Form from "./components/Form/Form";
// import Calculator from "./components/Temperature/Calculator";
// import Text from "./components/Inheritance/Text";
import Text from "./components/Composition/Text";
import Emoji from "./components/Composition/AddEmoji";
import Bracket from "./components/Composition/AddBracket";
// import ClickCounter from "./HOC/ClickCounter";
import ClickCounter from "./HOC/hoc/ClickCounter";
// import MouseOver from "./HOC/MouseOver";
import HoverCounter from "./HOC/hoc/HoverCounter";

function App() {
    console.log('App component render');
    const quantities = [1];
    return (
        <div className="App">
            <h1>Hello Sourav</h1>
            {/*<Clock local='bn-BD'/>*/}
            {/*<Clock/>*/}
            <ClockList quantities={quantities}/>
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
            <ClickCounter/>
            <HoverCounter/>
        </div>
    );
}

export default App;