import './App.css';
// import Clock from "./components/Clock/Clock";
import ClockList from "./components/Clock/ClockList";
// import Form from "./components/Form/Form";
// import Calculator from "./components/Temperature/Calculator";
// import Text from "./components/Inheritance/Text";
import Text from "./components/Composition/Text";
import Emoji from "./components/Composition/AddEmoji";
import AddBracket from "./components/Composition/AddBracket";

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
                    <AddBracket>
                        {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket}/>}
                    </AddBracket>
                )}
            </Emoji>
        </div>
    );
}

export default App;