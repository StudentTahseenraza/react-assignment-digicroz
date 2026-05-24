import { useState } from "react";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

const PasswordField = ({ value, onChange }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          flex: 1,
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />

      <button
        onClick={() => setShow(!show)}
        style={{
          padding: "10px 14px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
        }}
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default PasswordField;