import axios, { AxiosResponse } from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-type': 'application/json',
  },
});

const findAll = async () => {
  const response = await apiClient.get<string[]>('/users');
  return response.data;
};

const findId = async (id: string) => {
  const response = await apiClient.get<any, AxiosResponse<any, any>, any>(`/search/users?q=${id}`);
  console.log(response.data)
  return response.data;
};

// const findRepo = async () => {
//   const response = await apiClient.get<string[]>('/repos');
//   return response.data;
// };

const GetUsersService = {
  findAll,
  findId,
  // findRepo,
};

export default GetUsersService;
