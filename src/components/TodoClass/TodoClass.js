import React, {Component} from 'react';

class TodoClass extends Component {
    state = {
        todo: '',
        warning: '',
    }
    handleInput = (e) => {
        const inputValue = e.target.value;
        const warningShow = inputValue.includes('.js')
            ? 'You need to *JS* skill to complete the task'
            : null;

        this.setState({
            todo: inputValue,
            warning: warningShow
        })
    };

    render() {
        const {todo, warning} = this.state;
        return (
            <div>
                <h1>Todo Class</h1>
                <p>{todo}</p>
                <p><textarea name='todo' onChange={this.handleInput} rows='5' cols='100'/></p>
                <hr/>
                <h3>{warning || 'Good Choice'}</h3>
            </div>
        );
    }
}

export default TodoClass;