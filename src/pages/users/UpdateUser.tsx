import { useState } from "react";
import { updateUser } from "../../api/userApi";
import { useNavigate, useParams } from "@tanstack/react-router";

const UpdateUser = () => {
  const { id } = useParams({ strict: false });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleUpdate = async () => {
    if (!id) return;

    await updateUser(id, { name, email });
    navigate({ to: "/users" });
  };

  return (
    <div>
      <h2>Update User</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateUser;