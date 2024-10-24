// /components/ContactForm.tsx

import styles from "../styles/aboutus.module.scss"; 
const ContactForm = () => {
  return (
    <form className={styles.contactForm}>
      <input type="text" placeholder="FULL NAME" required />
      <input type="email" placeholder="EMAIL ADDRESS" required />
      <textarea placeholder="MESSAGE" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
