import React, { useState } from "react";

import styles from "../styles/QueuePage.module.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import QueueModal from "../components/QueueModal";

const appointments: Appointment[] = [
  {
    id: 1,
    title: "Appointment 1",
    doctor: "Dr Achraf Azizi",
    date: "06/8/2024",
    time: "10:00 AM",
    position: 32,
  },
  {
    id: 2,
    title: "Appointment 2",
    doctor: "Dr Achraf Azizi",
    date: "06/8/2024",
    time: "10:30 AM",
    position: 28,
  },
  {
    id: 3,
    title: "Appointment 3",
    doctor: "Dr Achraf Azizi",
    date: "06/8/2024",
    time: "11:00 AM",
    position: 25,
  },
  {
    id: 4,
    title: "Appointment 4",
    doctor: "Dr Achraf Azizi",
    date: "06/8/2024",
    time: "11:30 AM",
    position: 20,
  },
  {
    id: 5,
    title: "Appointment 5",
    doctor: "Dr Achraf Azizi",
    date: "06/8/2024",
    time: "12:00 PM",
    position: 15,
  },
  {
    id: 6,
    title: "Appointment 6",
    doctor: "Dr Achraf Azizi",
    date: "06/8/2024",
    time: "12:30 PM",
    position: 10,
  },
];
interface Appointment {
  id: number;
  title: string;
  doctor: string;
  date: string;
  time: string;
  position: number;
}

const QueuePage: React.FC = () => {
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);

  const handleQueueClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
  };

  const closeModal = () => {
    setSelectedAppointment(null);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>View Your Queue</h1>
        </div>
        <div className={styles.appointmentsSection}>
          <h2>Appointments List</h2>
          <div className={styles.appointmentsGrid}>
            {appointments.map((appointment) => (
              <div key={appointment.id} className={styles.appointmentCard}>
                <div className={styles.cardContent}>
                  <p className={styles.appointmentTitle}>{appointment.title}</p>
                  <p className={styles.doctorInfo}>
                    {appointment.doctor} {appointment.date}
                  </p>
                </div>
                <a
                  href="#"
                  onClick={() => handleQueueClick(appointment)}
                  className={styles.queueLink}
                >
                  View Queue <span className={styles.arrow}>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedAppointment && (
        <QueueModal appointment={selectedAppointment} onClose={closeModal} />
      )}
      <Footer />
    </>
  );
};

export default QueuePage;
