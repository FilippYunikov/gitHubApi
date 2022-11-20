import { Link } from "react-router-dom";

import useGetUsersId from "../../common/hooks/use-get-users";
import { ContainerCard, ImageCard, LinkCard } from "./user-cardSC";

interface IProps {
    readonly search: string;
}

export const UserCard = (props: IProps) => {
    const { search } = props;

    const { isLoading, data } = useGetUsersId(search);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <>
            {data?.items.map((el) => {
                return (
                    <ContainerCard key={el.id}>
                        <ImageCard src={el.avatar_url} alt="avatar" />
                        <p>{el.login}</p>
                        <LinkCard href={el.html_url}>{'Репозиторий'}</LinkCard>
                        <Link style={{ paddingBottom: 20 }} to={`/user/${el.login}`}>Открыть в другом окне</Link>
                    </ContainerCard>
                )
            })}
        </>
    )
}