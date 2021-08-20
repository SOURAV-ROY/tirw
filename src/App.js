import './App.css';
// import Clock from "./components/Clock/Clock";
import ClockList from "./components/Clock/ClockList";
// import Form from "./components/Form/Form";
import Calculator from "./components/Temperature/Calculator";
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