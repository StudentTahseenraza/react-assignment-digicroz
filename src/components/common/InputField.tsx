type Props = {
  label: string;
  value: string;
  onChange: (val: string) => void;
};

const InputField = ({ label, value, onChange }: Props) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ display: "block", width: "100%", padding: "5px" }}
      />
    </div>
  );
};

export default InputField;