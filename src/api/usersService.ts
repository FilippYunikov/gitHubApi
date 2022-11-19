import axios, { AxiosResponse } from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-type': 'application/json',
  },
});

const findId = async (id: string) => {
  const response = await apiClient.get<any, AxiosResponse<any, any>, any>(`/search/users?q=${id}`);
  return response.data;
};


const GetUsersService = {
  findId,
};

export default GetUsersService;
