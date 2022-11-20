import { ChangeEvent } from "react";

interface InputProps {
 onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputCustom = (props: InputProps) => {
    const {onChange} = props;

    return (
     
        <input
        style={{width: 200, height: 40, border: '1px solid black', borderRadius: 10}}
            type="text"
            placeholder="Search for User"
            onChange={onChange}
            className="input_search"
        />

    )
}
