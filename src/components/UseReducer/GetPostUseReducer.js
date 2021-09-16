import React, {useEffect, useReducer} from 'react';

const initialState = {
    loading: true,
    post: {},
    error: '',
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                post: action.result,
                error: ''
            }
        case 'FAILURE':
            return {
                loading: false,
                post: {},
                error: 'Data Loading Something went wrong'
            }
        default:
            return state;

    }
}

function GetPostUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then((date) => {
                dispatch({type: 'SUCCESS', result: date})
            })
            .catch(error => {
                dispatch({type: 'FAILURE'})
                console.log(error);
            })
    }, [])
    return (
        <div>
            <h1>{state.loading ? 'Loading' : state.post.title}</h1>
            <p>{state.loading ? 'Loading' : state.post.body}</p>
            <p>{state.error || null}</p>
        </div>
    );
}

export default GetPostUseReducer;
