type Props = {
  label: string;
  value: string;
  onChange: (val: string) => void;
};

const InputField = ({ label, value, onChange }: Props) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label
        style={{
          display: "block",
          marginBottom: "6px",
          fontWeight: 500,
        }}
      >
        {label}
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          outline: "none",
        }}
      />
    </div>
  );
};

export default InputField;