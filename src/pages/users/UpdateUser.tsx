import { useState } from "react";
import { useNavigate, useParams } from "@tanstack/react-router";

const UpdateUser = () => {
  const { id } = useParams({ strict: false });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleUpdate = () => {
    const updatedUser = {
      id,
      name,
      email,
    };

    navigate({
      to: "/users",
      state: { updatedUser },
    });
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "24px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        Update User
      </h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "16px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />

      <button
        onClick={handleUpdate}
        style={{
          padding: "10px 16px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Update
      </button>
    </div>
  );
};

export default UpdateUser;