// components/QueueModal.tsx
import React from "react";
import styles from "../styles/QueueModal.module.scss";

interface QueueModalProps {
  appointment: {
    title: string;
    doctor: string;
    date: string;
    time: string;
    position: number;
  };
  onClose: () => void;
}

const QueueModal: React.FC<QueueModalProps> = ({ appointment, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h3>{appointment.title}</h3>
        <p>Queue position with {appointment.doctor}</p>
        <h1>{appointment.position}</h1>
        <p>Date: {appointment.date}</p>
        <p>Time: {appointment.time}</p>
        <p>Current Queue Position: {appointment.position}</p>
        <button onClick={onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
};

export default QueueModal;
