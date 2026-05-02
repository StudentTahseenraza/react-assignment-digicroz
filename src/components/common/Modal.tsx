type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const Modal = ({ open, onClose, onConfirm }: Props) => {
  if (!open) return null;

  return (
    <div>
      <p>Are you sure?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default Modal;