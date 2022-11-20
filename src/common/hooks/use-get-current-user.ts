import { useQuery } from 'react-query';

import GetUsersService from "../../api/users-service";

const useGetCurrentUser = (login: string) => {
    const { isLoading, data, isError } = useQuery(['useGetUserLogin'], async () => {
        return await GetUsersService.findCurrentUser(login);
    })
    return { isLoading, data, isError };
};

export default useGetCurrentUser;