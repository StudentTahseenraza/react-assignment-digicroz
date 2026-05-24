import { useState, useEffect } from "react";
import { useUsers } from "../../hooks/useUsers";
import {
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";

import Modal from "../../components/common/Modal";

type User = {
  id: number;
  name: string;
  email: string;
};

const Users = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } =
    useUsers(page);

  const navigate = useNavigate();

  const routerState = useRouterState();

  const [users, setUsers] =
    useState<User[]>([]);

  const [selectedId, setSelectedId] =
    useState<string | null>(null);

  const [open, setOpen] =
    useState(false);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  useEffect(() => {
    const state =
      routerState.location.state as any;

    if (!state) return;

    if (state.newUser) {
      setUsers((prev) => [
        state.newUser,
        ...prev,
      ]);
    }

    if (state.updatedUser) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === Number(state.updatedUser.id)
            ? state.updatedUser
            : user
        )
      );
    }
  }, [routerState.location.key]);

  const handleDelete = () => {
    if (!selectedId) return;

    setUsers((prev) =>
      prev.filter(
        (user) =>
          user.id !== Number(selectedId)
      )
    );

    setOpen(false);
  };

  if (isLoading)
    return <p>Loading...</p>;

  if (error)
    return (
      <p>Error loading users</p>
    );

  const usersPerPage = 5;

  const paginatedUsers =
    users.slice(
      (page - 1) * usersPerPage,
      page * usersPerPage
    );

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        Users
      </h2>

      <button
        onClick={() =>
          navigate({
            to: "/users/add",
          })
        }
        style={{
          padding: "10px 16px",
          marginBottom: "20px",
        }}
      >
        Add User
      </button>

      {paginatedUsers.length === 0 && (
        <p>No users found</p>
      )}

      {paginatedUsers.map(
        (user) => (
          <div
            key={user.id}
            style={{
              padding: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          >
            <p>
              <strong>Name:</strong>{" "}
              {user.name}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {user.email}
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "12px",
              }}
            >
              <button
                onClick={() =>
                  navigate({
                    to: `/users/${user.id}/update`,
                  })
                }
              >
                Edit
              </button>

              <button
                onClick={() => {
                  setSelectedId(
                    user.id.toString()
                  );

                  setOpen(true);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        )
      )}

      <Modal
        open={open}
        onClose={() =>
          setOpen(false)
        }
        onConfirm={handleDelete}
      />

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button
          disabled={page === 1}
          onClick={() =>
            setPage(page - 1)
          }
        >
          Prev
        </button>

        <button
          disabled={
            page *
              usersPerPage >=
            users.length
          }
          onClick={() =>
            setPage(page + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;