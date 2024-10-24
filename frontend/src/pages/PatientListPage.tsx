import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import styles from "../styles/PatientListPage.module.scss";
import { FaArrowUp, FaSearch } from "react-icons/fa";

const patients = [
  {
    name: "Kristin Watson",
    condition: "Infectious disease",
    email: "kristinw@mail.com",
    phone: "(219) 555-0114",
    date: "22/12/2022",
    time: "05:20 PM",
  },
  {
    name: "Kristin Watson",
    condition: "Infectious disease",
    email: "kristinw@mail.com",
    phone: "(219) 555-0114",
    date: "22/12/2022",
    time: "05:20 PM",
  },
  {
    name: "Kristin Watson",
    condition: "Infectious disease",
    email: "kristinw@mail.com",
    phone: "(219) 555-0114",
    date: "22/12/2022",
    time: "05:20 PM",
  },
];

const PatientListPage: React.FC = () => {
  const [isImportModalOpen, setImportModalOpen] = useState(false);

  const handleImportClick = () => {
    setImportModalOpen(true);
  };

  const handleCloseModal = () => {
    setImportModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>List of Patients</h1>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} /> {/* Add search icon */}
          <input
            type="text"
            placeholder="Search patients..."
            className={styles.searchInput}
          />
        </div>
        <div className={styles.tableHeader}>
          <span>Patient</span>
          <span></span>
          <span>Email</span>
          <span>Phone Number</span>
          <span>Date & Time</span>
        </div>
        <div className={styles.patientList}>
          {patients.map((patient, index) => (
            <div key={index} className={styles.patientRow}>
              <div className={styles.patientInfo}>
                <Image
                  src="/site pics/6.png"
                  alt={patient.name}
                  width={50}
                  height={50}
                  className={styles.avatar}
                />
                <div>
                  <h3>{patient.name}</h3>
                  <p>{patient.condition}</p>
                </div>
              </div>
              <div className={styles.patientAction}>
                <FaArrowUp
                  className={styles.uploadIcon}
                  onClick={handleImportClick}
                />
              </div>
              <div className={styles.patientEmail}>{patient.email}</div>
              <div className={styles.patientPhone}>{patient.phone}</div>
              <div className={styles.patientDateTime}>
                <span>{patient.date}</span>
                <span>{patient.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      {isImportModalOpen && <Modal onClose={handleCloseModal} />}
    </>
  );
};

export default PatientListPage;
