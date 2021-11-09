import React from 'react';
import {useParams} from "react-router-dom";

function Post() {
    const params = useParams();
    return (
        <div>
            <h1>Post</h1>
            <p>Post id is {params.postId}</p>
        </div>
    );
}

export default Post;