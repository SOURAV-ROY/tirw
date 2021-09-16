import React, {useEffect, useState} from 'react';

function GetPostUseState() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then((date) => {
                setLoading(false);
                setPost(date);
                setError('');
            })
            .catch(error => {
                setLoading(false);
                setPost({});
                setError('There was a Data Loading problem');
                console.log(error);
            })
    }, [])
    return (
        <div>
            <h1>{loading ? 'Loading' : post.title}</h1>
            <p>{loading ? 'Loading' : post.body}</p>
            <p>{error || null}</p>
        </div>
    );
}

export default GetPostUseState;
