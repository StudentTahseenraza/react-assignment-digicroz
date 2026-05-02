import { useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import { useNavigate } from "@tanstack/react-router";
import Modal from "../../components/common/Modal";
import { deleteUser } from "../../api/userApi";

const Users = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useUsers(page);

  const navigate = useNavigate();

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    if (!selectedId) return;
    await deleteUser(selectedId);
    setOpen(false);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <div>
      <h2>Users</h2>

      <button onClick={() => navigate({ to: "/users/add" })}>
        Add User
      </button>

      {data.data.map((user: any) => (
        <div key={user.id}>
          {user.email}

          <button
            onClick={() =>
              navigate({ to: `/users/${user.id}/update` })
            }
          >
            Edit
          </button>

          <button
            onClick={() => {
              setSelectedId(user.id.toString());
              setOpen(true);
            }}
          >
            Delete
          </button>
        </div>
      ))}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
      />

      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Users;