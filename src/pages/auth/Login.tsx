import { useState } from "react";
import InputField from "../../components/common/InputField";
import PasswordField from "../../components/common/PasswordField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log({ email, password });
  };

  return (
    <div>
      <h2>Login</h2>

      <InputField label="Email" value={email} onChange={setEmail} />

      <PasswordField value={password} onChange={setPassword} />

      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;