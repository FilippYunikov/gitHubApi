import { ChangeEvent } from "react";

import { Input } from "./input-customSC";

interface InputProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputCustom = (props: InputProps) => {
    const { onChange } = props;

    return (
        <Input
            type="text"
            placeholder="Search for User"
            onChange={onChange}
            className="input_search"
        />

    )
}
