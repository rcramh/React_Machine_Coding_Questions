import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css"

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      </Modal>
    </div>
  );
}
