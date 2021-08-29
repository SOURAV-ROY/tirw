import React, {useState} from 'react';

const Todo = () => {
    const [todo, setTodo] = useState({
        title: '',
        description: '',
    });

    const {title, description} = todo;
    return (
        <div>
            <h1>Todo Object</h1>
            <p>{title}</p>
            <p>
                <input
                    type='text'
                    value={title}
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            title: e.target.value
                        })
                    }
                />
            </p>
            <p>
                <textarea
                    name='todo'
                    value={description}
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            description: e.target.value
                        })
                    }
                    rows='4'
                    cols='100'
                />
            </p>
            <hr/>
        </div>
    );
};

export default Todo;