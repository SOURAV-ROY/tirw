import React, {memo} from 'react';

const Title = () => {
    console.log('Title Rendering.....');
    return (
        <div>
            <h2>useCallback Title</h2>
        </div>
    );
};
// Should not use for small rendering because
export default memo(Title);
