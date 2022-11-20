import { ChangeEvent, useState } from 'react';
import debounce from 'lodash.debounce';

import { InputCustom } from '../../components/input-custom';
import { UserCard } from '../../components/user-card';

export const PageHome = () => {
    const [githubUser, setGithubUser] = useState<string>('');

    const updateQuery = (e: ChangeEvent<HTMLInputElement>) => setGithubUser(e?.target?.value)

    const debouncedOnChange = debounce(updateQuery, 1000)

    return (
        <div>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'center', marginTop: 40 }}>
                <InputCustom onChange={debouncedOnChange} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%', marginTop: 100, marginBottom: 40 }}>
                <UserCard search={githubUser} />
            </div>
        </div>
    )
}