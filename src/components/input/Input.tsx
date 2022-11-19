import React, { useState, useEffect } from 'react';

interface InputProps {
 onChange: (e: any) => void
}

export const Input = (props: InputProps) => {

    const {onChange} = props;
    // console.log(onChange)
    return (
        <input
            type="text"
            placeholder="Search for User"
            // onChange={e => setGithubUser(e.target.value)}
            onChange={onChange}
            className="input_search"
        />
    )
}