import React from 'react';
import {useHistory, useParams} from "react-router-dom";

function Posts({match}) {
    const {category, topic} = useParams();
    const parameters = useParams();
    console.log(parameters);

    const history = useHistory();
    console.log(history);

    console.log(match);
    // const {params} = match;
    return (
        // <div>Posts Page -> {params.category} ->> {params.topic}</div>
        <div>Posts Page -> {category} ->> {topic}</div>
    );
}

export default Posts;
