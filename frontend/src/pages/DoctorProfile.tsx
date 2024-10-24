import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { FaPen, FaPhone, FaEnvelope } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import styles from "../styles/ProfilePage.module.scss";
import { useRouter } from "next/router";

const DoctorProfile: React.FC = () => {
  const router = useRouter();

  const handleViewResultsClick = () => {
    router.push("/PatientListPage"); // Redirects to the Patient List page
  };
  return (
    <>
      <Navbar />
      <div className={styles.profilePage}>
        <div className={styles.header}>
          <Image
            src="/site pics/cover.png"
            alt="Profile Banner"
            layout="fill"
            objectFit="cover"
            className={styles.bannerImage}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.profileDetails}>
            <Image
              src="/site pics/6.png"
              alt="Achraf Azizi"
              width={80}
              height={80}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <h2>Dr. Achraf Azizi</h2>
              <p>Doctor</p>
            </div>
          </div>

          <div className={styles.detailsAndDiagnosis}>
            <div className={styles.details}>
              <h3>
                Your details
                <FaPen className={styles.editIcon} />
              </h3>
              <div className={styles.detailItems}>
                <div className={styles.detailItem}>
                  <span>About</span>
                  <span>achraf@gmail.com</span>
                </div>
                <div className={styles.detailItem}>
                  <span>Phone</span>
                  <span>0622333323</span>
                </div>
                <div className={styles.detailItem}>
                  <span>Full name</span>
                  <span>Achraf Azizi</span>
                </div>
                <div className={styles.detailItem}>
                  <span>Password</span>
                  <span>********</span>
                </div>
              </div>
            </div>

            <div className={styles.diagnosis}>
              <h3>Schedule</h3>
              <p>
                <span>Your schedule</span> for the week
                <button
                  className={styles.viewResultsButton}
                  onClick={handleViewResultsClick}
                >
                  View Schedule
                </button>
              </p>
            </div>

            <div className={styles.logoutSection}>
              <RiLogoutBoxLine className={styles.logoutIcon} />
              <button className={styles.logoutButton}>Log me out</button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default DoctorProfile;
