import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Modal Title</h2>
        <p>This is a simple modal in React.</p>
      </div>
    </div>
  );
};

export default Modal;
