type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const Modal = ({ open, onClose, onConfirm }: Props) => {
  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "280px",
          textAlign: "center",
        }}
      >
        <p style={{ marginBottom: "16px" }}>
          Are you sure?
        </p>

        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button onClick={onConfirm}>
            Yes
          </button>

          <button onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;