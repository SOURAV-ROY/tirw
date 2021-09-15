import React, {forwardRef} from 'react';

function Input({type, placeholder}, reference) {
    return (
        <input ref={reference} type={type} placeholder={placeholder}/>
    );
}

const forwardedInput = forwardRef(Input);
// export default Input;
export default forwardedInput;
