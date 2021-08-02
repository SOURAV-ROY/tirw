import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

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