import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useGetCurrentUser from '../../common/hooks/use-get-current-user';
import { Button, Container, ContainerUser, UserAvatar } from './page-current-userSC';

export const PageCurrentUser = () => {
    const navigate = useNavigate()

    const { login } = useParams();

    const { data } = useGetCurrentUser(login!);

    const goBack = useCallback(() => {
        navigate('/')
    }, [])
    
    return (
        <Container>
            <ContainerUser>
                <UserAvatar src={data?.avatar_url} alt="avatar" />
                <p>{data?.name ? data?.name : data?.login}</p>
                <p>{`Подписчики: ${data?.followers}`}</p>
                <p>{data?.bio ? data?.bio : 'Данный пользователь ничего про себя не рассказал'}</p>
                <Button onClick={goBack}>
                    <p>назад</p>
                </Button>
            </ContainerUser>
        </Container>
    )
}