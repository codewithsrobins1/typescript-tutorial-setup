import React, { useState, useRef } from 'react'

interface Person {
    firstName: string,
    lastName: string;
}

interface ITextFieldProps {
    text: string,
    ok?: boolean,
    i?: number,
    fn?: (bob: string) => string,
    person?: Person;
}

const TextField: React.FC<ITextFieldProps> = () => {
    const [count, setCount] = useState<number | null>(5);
    
    setCount(null)

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <input ref={inputRef} />
            <h1>{count}</h1>
        </div>
    )
}

export default TextField
