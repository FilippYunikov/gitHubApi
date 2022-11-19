import useGetUsersId from '../../common/hooks/useGetUsersId';

const UserCard = (props: any) => {
    const { search } = props;

    const { isLoading, data } = useGetUsersId(search);

    return (
        <>
            {isLoading ? 'Loading...' : data?.items.map((el: any) => {
                return (
                    <div style={{display: 'flex', width: 200, justifyContent: 'center',alignItems: 'center', flexDirection: 'column', border: '1px solid black', margin: 10 }} key={el.id}>
                        <img style={{ width: 50, height: 50 }} src={el.avatar_url
                        } alt="BigCo Inc. logo" />
                        <p>{el.login}</p>
                        <a href={el.html_url}>{'Репозиторий'}</a>
                    </div>
                )
            })}

        </>
    )
}

export default UserCard;