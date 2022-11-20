import axios from 'axios';

import { ICurrentUser, IUser } from './types';

const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-type': 'application/json',
  },
});

const findUsers = async (login: string) => {
  const response = await apiClient.get<IUser>(`/search/users?q=${login}`);
  return response.data;
};

const findCurrentUser = async (login: string) => {
  const response = await apiClient.get<ICurrentUser>(`/users/${login}`);
  return response.data;
};



const GetUsersService = {
  findUsers,
  findCurrentUser,
};

export default GetUsersService;
