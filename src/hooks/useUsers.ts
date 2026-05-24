import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUsers = (page: number) => {
  return useQuery({
    queryKey: ["users", page],
    queryFn: async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      return res.data;
    },
  });
};