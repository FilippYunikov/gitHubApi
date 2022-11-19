import { useState } from 'react';
import debounce from 'lodash.debounce';

import Input from '../../components/input/Input'
import UserCard from '../../components/userCard/UserCard';

export const PageHome = () => {
    const [githubUser, setGithubUser] = useState<string>('');

    const updateQuery = (e: any) => setGithubUser(e?.target?.value)

    const debouncedOnChange = debounce(updateQuery, 500)

    return (
        <>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                <Input onChange={debouncedOnChange} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%', marginTop: 100, marginBottom: 40 }}>
                <UserCard search={githubUser} />
            </div>
        </>
    )
}