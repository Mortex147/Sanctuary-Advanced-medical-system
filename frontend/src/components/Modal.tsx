import React from "react";
import styles from "../styles/Modal.module.scss";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Import Data</h2>
        <p>Select a file to import patient data.</p>
        <input type="file" />
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
