// /components/ScheduleHours.tsx

import styles from "../styles/Appointments.module.scss";

const ScheduleHours = () => {
  return (
    <div className={styles.scheduleHours}>
      <h3>Schedule hours</h3>
      <ul>
        <li>Monday — 09:00 AM - 07:00 PM</li>
        <li>Tuesday — 09:00 AM - 07:00 PM</li>
        <li>Wednesday — 09:00 AM - 07:00 PM</li>
        <li>Thursday — 09:00 AM - 07:00 PM</li>
        <li>Friday — 09:00 AM - 07:00 PM</li>
        <li>Saturday — 09:00 AM - 07:00 PM</li>
        <li>Sunday — Closed</li>
      </ul>
      <div className={styles.emergencyContact}>
        <p>Emergency</p>
        <h4>(237) 681-812-255</h4>
      </div>
    </div>
  );
};

export default ScheduleHours;
