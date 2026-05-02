import { useState } from "react";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

const PasswordField = ({ value, onChange }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default PasswordField;