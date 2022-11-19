import { useQuery } from 'react-query';

import GetUsersService from '../../api/usersService';

const useGetUsersId = (id: string) => {
  const { isLoading, data, isError } = useQuery(['getUsersId'], async () => {
    return await GetUsersService.findId(id);
  },
    {
      enabled: Boolean(id),
      retryDelay: 1000,
    })
  return { isLoading, data, isError };
};

export default useGetUsersId;