import React, {Component} from 'react';
import BoilingVerdict from "./BoilingVerdict";
import {convert, toCelsius, toFahrenheit} from "../lib/Converter";
import TemperatureInput from "./TemperatureInput";

class Calculator extends Component {
    state = {
        temperature: '',
        scale: 'c'
    }

    // onTemperatureChange = (e) => {
    //     this.setState({
    //         temperature: e.target.value
    //     })
    // }

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale
        })
    }

    render() {
        const {temperature, scale} = this.state;

        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleChange}/>
                <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleChange}/>
                {/*<fieldset>*/}
                {/*    <legend>Enter Temperature to celsius</legend>*/}
                {/*    <input type="text" value={temperature} onChange={this.onTemperatureChange}/>*/}
                {/*</fieldset>*/}
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </div>
        );
    }
}

export default Calculator;