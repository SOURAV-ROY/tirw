import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import AppUpdate from "./AppUpdate";

// ReactDOM.render(
//     <React.StrictMode>
//         <App/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

ReactDOM.render(
    <React.StrictMode>
        <AppUpdate/>
    </React.StrictMode>,
    document.getElementById('root')
);

/*****************************************************
 let states = [];
 let stateIndex = -1;

 function useState(defaultValue) {
    const index = ++stateIndex;
    if (states[index]) return states[index];

    const setValue = (newValue) => {
        states[index][0] = newValue;
        renderWithS4V();
    }

    const returnArray = [defaultValue, setValue];
    states[index] = returnArray;
    return returnArray;
}

 const Todo = () => {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const warningShow = inputValue.includes('.js')
            ? 'You need to *JS* Func skill to complete the task'
            : null;

        setTodo(inputValue);
        setWarning(warningShow);
    };
    return (
        <div>
            <p>{todo}</p>
            <p><textarea name='todo' onChange={handleInput} rows='5' cols='100'/></p>
            <hr/>
            <h3>{warning || 'Good Choice'}</h3>
        </div>
    );
};

 function renderWithS4V() {
    stateIndex = -1;

    ReactDOM.render(
        <React.StrictMode>
            <Todo/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
 renderWithS4V();
 ***********************************************************/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 // const element = React.createElement('h1', null, 'Hello, SOURAV!');
 // const element = <h1>Hello, SOURAV !!!!!!!!!</h1>;

 const name = 'Sourav Roy';
 const date = <h2>Today is {new Date().toLocaleString()}</h2>

 console.log(date);

 setInterval(() => {
    const element = (
        <h1>Hello, SOURAV {name}
            <span>Time Is {new Date().toLocaleString()} </span>
        </h1>
    );

    // ReactDOM.render(element, document.getElementById('root'));
}, 1000);

 // function Clock({local}) {
//     return (
//         <h1>Hello, SOURAV {name}
//             <span>Time Is {new Date().toLocaleString(local)} </span>
//         </h1>
//     );
// }

 // class Clock extends React.Component {
//     print() {
//         return (
//             <h1>Hello, SOURAV {name}
//                 <span>Time Is {new Date().toLocaleString()} </span>
//             </h1>
//         );
//     }
// }

 // const ClockComponent = new Clock();

 class Clock extends React.Component {
    render() {
        return (
            <h1>Hello, SOURAV {name} <i>{this.props.children}</i>
                <span>Time Is {new Date().toLocaleString(this.props.local)} </span>
            </h1>
        );
    }
}

 // Function call *******************************************
 // ReactDOM.render(Clock(), document.getElementById('root'));

 // Function call by ***** HTML TAG ****************************************
 // ReactDOM.render(<Clock local="bn-BD"/>, document.getElementById('root'));

 // Class Component Call From Here *****************************************
 // ReactDOM.render(ClockComponent.print(), document.getElementById('root'));

 // React class Extends React Component *****************************************
 ReactDOM.render(<Clock local="bn-BD"> AWESOME </Clock>, document.getElementById('root'));
 */
