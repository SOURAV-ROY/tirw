import React, {memo} from 'react';

const ShowCount = ({count, title}) => {
    console.log(`Rendering ShowCount ${title}`)
    return (
        <div>
            <p>
                {title} {count}
            </p>
        </div>
    );
};

export default memo(ShowCount);
