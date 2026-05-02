import axios from "axios";

export const fetchUsers = async (page: number) => {
  const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
  return res.data;
};