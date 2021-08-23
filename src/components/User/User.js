import React from 'react';

function User({name}) {
    return (
        <div>
            {/*<h1>{name}</h1>*/}
            {/*<h1>{name()}</h1>*/}
            {/*<h1>{name(true)}</h1>*/}
            <h1>{name(true)}</h1>
        </div>
    );
}

export default User;