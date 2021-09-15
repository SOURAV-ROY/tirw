import React, {useEffect, useRef} from 'react';
import Input from "./Input";

function Form() {
    const inputRef = useRef(null)

    useEffect(() => {
        // console.log(inputRef.current);
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <p>
                {/*<input ref={inputRef} type="text" placeholder='Enter Something'/>*/}
                <Input ref={inputRef} type="text" placeholder='Enter Something'/>
            </p>
        </div>
    );
}

export default Form;
