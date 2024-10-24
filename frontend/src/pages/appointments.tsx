// /pages/index.tsx

import Head from "next/head";
import styles from "../styles/Appointments.module.scss";
import AppointmentForm from "../components/AppointmentForm";
import ScheduleHours from "../components/ScheduleHours";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Appointment() {
  return (
    <>
    <Navbar />
      <Head>
        <title>Book An Appointment</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Book An Appointment</h1>
        </header>

        <section className={styles.mainContent}>
          <div className={styles.appointmentSection}>
            <h2>Book an Appointment</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue.
            </p>
            <AppointmentForm />
          </div>

          <div className={styles.scheduleSection}>
            <ScheduleHours />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
