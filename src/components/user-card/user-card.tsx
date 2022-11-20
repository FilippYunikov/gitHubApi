import { Link } from "react-router-dom";

import useGetUsersId from "../../common/hooks/use-get-users";

interface IProps {
    readonly search: string;
}

export const UserCard = (props: IProps) => {
    const { search } = props;

    const { isLoading, data } = useGetUsersId(search);

    return (
        <>
            {isLoading ? 'Loading...' : data?.items.map((el) => {
                return (
                    <div style={{ display: 'flex', width: 200, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', border: '1px solid black', borderRadius: 25, margin: 10 }} key={el.id}>
                        <img style={{ width: 80, height: 80, paddingTop: 20, }} src={el.avatar_url
                        } alt="avatar" />
                        <p>{el.login}</p>
                        <a style={{ paddingBottom: 20 }} href={el.html_url}>{'Репозиторий'}</a>
                        <Link to={`/user/${el.login}`}>Открыть в другом окне</Link>
                    </div>

                )
            })}
        </>
    )
}