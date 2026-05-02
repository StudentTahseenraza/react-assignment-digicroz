import { useState } from "react";
import { addUser } from "../../api/userApi";
import { useNavigate } from "@tanstack/react-router";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    await addUser({ name, email });
    navigate({ to: "/users" });
  };

  return (
    <div>
      <h2>Add User</h2>

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

      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddUser;