import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import { UserCard } from '../../components/userCard/UserCard';
import { Input } from '../../components/input/Input'

export const PageHome = () => {
    const [githubUser, setGithubUser] = useState<string>('');

    const updateQuery = (e: any) => setGithubUser(e?.target?.value)

    const debouncedOnChange = debounce(updateQuery, 500)
    
    return (
        <>
            <Input onChange={debouncedOnChange} />
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%', marginTop: 100, marginBottom: 40 }}>
                <UserCard search={githubUser} />
            </div>
        </>
    )
}