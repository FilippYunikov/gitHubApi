import { useQuery } from 'react-query';

import GetUsersService from '../../api/get-users-service';

const useGetUsers = (id: string) => {
  const { isLoading, data, isError } = useQuery(['useGetUsers', id], async () => {
    return await GetUsersService.findUsers(id);
  },
    {
      enabled: Boolean(id),
    })
  return { isLoading, data, isError };
};


export default useGetUsers;