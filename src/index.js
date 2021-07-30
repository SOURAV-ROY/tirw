import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

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

    ReactDOM.render(element, document.getElementById('root'));
}, 1000);
// ReactDOM.render(date, document.getElementById('root'));