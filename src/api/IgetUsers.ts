import axios from 'axios';

const URL = 'https://api.github.com/users';

export const getUsers = async () => {
  const response = await axios.get(URL);
  return response;
};
