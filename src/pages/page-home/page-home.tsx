import { ChangeEvent, useState } from 'react';
import debounce from 'lodash.debounce';

import { InputCustom } from '../../components/input-custom';
import { UserCard } from '../../components/user-card';
import { ContainerCard, ContainerInput } from './page-homeSC';

export const PageHome = () => {
    const [githubUser, setGithubUser] = useState<string>('');

    const updateQuery = (e: ChangeEvent<HTMLInputElement>) => setGithubUser(e?.target?.value)

    const debouncedOnChange = debounce(updateQuery, 1000)

    return (
        <div>
            <ContainerInput>
                <InputCustom onChange={debouncedOnChange} />
            </ContainerInput>
            <ContainerCard>
                <UserCard search={githubUser} />
            </ContainerCard>
        </div>
    )
}