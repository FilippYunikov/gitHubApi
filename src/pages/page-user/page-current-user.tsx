import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useGetCurrentUser from '../../common/hooks/use-get-current-user';

export const PageUser = () => {
    const navigate = useNavigate()

    const {login} = useParams();

    const {data} = useGetCurrentUser(login!);

    const goBack = useCallback(() => {
        navigate('/')
    }, [])

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <div style={{ display: 'flex', width: 500, height: 500, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img style={{ width: 150, height: 150, paddingTop: 20, }} src={data?.avatar_url} alt="avatar" />
                <p>{data?.name}</p>
                <p>{data?.bio}</p>
                <button onClick={goBack} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 80, height: 40 }}>
                    <p>назад</p>
                </button>
            </div>
        </div>

    )

}