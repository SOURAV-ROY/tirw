import './App.css';
// import Clock from "./components/Clock";
import ClockList from "./components/ClockList";
import Form from "./components/Form";

function App() {
    console.log('App component render');
    const quantities = [1];
    return (
        <div className="App">
            <h1>Hello Sourav</h1>
            {/*<Clock local='bn-BD'/>*/}
            {/*<Clock/>*/}
            <ClockList quantities={quantities}/>
            <Form/>
        </div>
    );
}

export default App;