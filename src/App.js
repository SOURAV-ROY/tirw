import './App.css';
import Clock from "./components/Clock";

function App() {
    return (
        <div className="App">
            {/*<header className="App-header">*/}
                <h1>Hello Sourav</h1>
                <Clock local='bn-BD'/>
            {/*</header>*/}
        </div>
    );
}

export default App;