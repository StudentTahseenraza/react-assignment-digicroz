import axios from "axios";

const BASE_URL = "https://reqres.in/api/users";

export const fetchUsers = async (page: number) => {
  const res = await axios.get(`${BASE_URL}?page=${page}`);
  return res.data;
};

export const addUser = async (data: {
  name: string;
  email: string;
}) => {
  const res = await axios.post(BASE_URL, data);
  return res.data;
};

export const updateUser = async (id: string, data: any) => {
  const res = await axios.put(`${BASE_URL}/${id}`, data);
  return res.data;
};

export const deleteUser = async (id: string) => {
  await axios.delete(`${BASE_URL}/${id}`);
};