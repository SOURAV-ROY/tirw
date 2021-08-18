import './App.css';
// import Clock from "./components/Clock";
import ClockList from "./components/ClockList";
// import Form from "./components/Form";
import Calculator from "./components/Calculator";

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
            <Calculator/>
        </div>
    );
}

export default App;