import { useState } from "react";
import InputField from "../../components/common/InputField";
import PasswordField from "../../components/common/PasswordField";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  return (
    <div>
      <h2>Register</h2>

      <InputField label="Name" value={name} onChange={setName} />
      <InputField label="Email" value={email} onChange={setEmail} />
      <PasswordField value={password} onChange={setPassword} />

      <select onChange={(e) => setCountry(e.target.value)}>
        <option>Select Country</option>
        <option value="india">India (+91)</option>
        <option value="usa">USA (+1)</option>
      </select>

      <InputField label="Mobile" value={mobile} onChange={setMobile} />

      {!otpSent ? (
        <button onClick={() => setOtpSent(true)}>Send OTP</button>
      ) : (
        <input placeholder="Enter OTP" />
      )}

      <button>Register</button>
    </div>
  );
};

export default Register;