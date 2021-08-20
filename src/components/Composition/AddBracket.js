import {Component} from 'react';

class AddBracket extends Component {

    addBracket = (text) => `[ ${text} ]`;

    render() {
        return this.props.children({addBracket: this.addBracket});
    }
}

export default AddBracket;