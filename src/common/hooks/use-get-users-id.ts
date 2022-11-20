import { useQuery } from 'react-query';

import GetUsersService from '../../api/users-service';

const useGetUsersId = (id: string) => {
  const { isLoading, data, isError } = useQuery(['getUsersId'], async () => {
    return await GetUsersService.findId(id);
  },
    {
      enabled: Boolean(id),
    })
  return { isLoading, data, isError };
};

export default useGetUsersId;