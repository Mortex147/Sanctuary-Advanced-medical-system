// /components/AppointmentForm.tsx

import styles from "../styles/Appointments.module.scss";

const AppointmentForm = () => {
  return (
    <div className={styles.appointmentForm}>
      <h3>Book your appointment now</h3>
      <p>So our team can reach out to you on time</p>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <div className={styles.formRow}>
          <input type="text" placeholder="Phone Number" />
          <select>
            <option value="">+971</option>
            {/* Add other country codes as needed */}
          </select>
        </div>
        <div className={styles.formRow}>
          <select>
            <option value="">Available Date</option>
            {/* Add date options here */}
          </select>
          <select>
            <option value="">Department</option>
            {/* Add department options here */}
          </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
