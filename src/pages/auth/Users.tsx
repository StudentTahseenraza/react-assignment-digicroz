import { useState } from "react";
import { useUsers } from "../../hooks/useUsers";

const User = {
  name: string;

}

const Users = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useUsers(page);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h2>Users</h2>

      {data.data.map((user: any) => (
        <div key={user.id}>{user.email}</div>
      ))}

      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Users;