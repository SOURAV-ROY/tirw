import React from 'react';
import {useParams, useNavigate} from "react-router-dom";

function Post() {
    const params = useParams();
    const navigate = useNavigate();

    function goBack() {
        // navigate('/posts', {
        //     replace: true
        // });
        navigate(-2);
        // console.log('test')
    }

    return (
        <div>
            <h1>Post</h1>
            <p>Post id is {params.postId}</p>

            <button onClick={goBack}>Go Back</button>
        </div>
    );
}

export default Post;