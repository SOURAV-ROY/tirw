import './App.css';
import Clock from "./components/Clock";

function App() {
    console.log('App component render');
    return (
        <div className="App">
            {/*<header className="App-header">*/}
            <h1>Hello Sourav</h1>
            {/*<Clock local='bn-BD'/>*/}
            <Clock/>
            {/*</header>*/}
        </div>
    );
}

export default App;