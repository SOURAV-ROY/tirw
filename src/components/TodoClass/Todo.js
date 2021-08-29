import React, {useState} from 'react';

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
            <h1>Todo Function</h1>
            <p>{todo}</p>
            <p><textarea name='todo' onChange={handleInput} rows='5' cols='100'/></p>
            <hr/>
            <h3>{warning || 'Good Choice'}</h3>
        </div>
    );
};

export default Todo;