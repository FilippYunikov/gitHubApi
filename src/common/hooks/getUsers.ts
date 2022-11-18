import { useQuery } from "react-query";
import { getUsers } from "../../api/IgetUsers";

export const useGetUsers = () => {
    const { isLoading, data, isError } = useQuery(['getUsers'], getUsers);
    return { data, isLoading, isError };
};
