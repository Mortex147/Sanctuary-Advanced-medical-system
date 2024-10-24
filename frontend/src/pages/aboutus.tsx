import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/aboutus.module.scss";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"; // Import React Icons
import ContactForm from "../components/ContactForm";
import InfoCard from "../components/InfoCard";

const AboutUs: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>
            Sanctuary to deliver high-quality, patient-
            <br />
            centered healthcare with compassion, integrity,
            <br /> and excellence
          </h1>
          <p>
            Welcome to Sanctuary, where our commitment to providing exceptional
            healthcare services is matched <br /> only by our dedication to
            patient comfort and satisfaction. Our state-of-the-art facilities
            and <br />
            compassionate staff are here to ensure you receive the best care
            possible.
          </p>
        </header>

        <section className={styles.about}>
          <div className={styles["large-rectangle"]}>
            <div className={styles.aboutText}>
              <h2>About Us</h2>
              <p>
                To be a leading healthcare provider known for our innovative
                approach and unwavering commitment to improving community
                health.
              </p>
              <a href="#">Learn more →</a>
            </div>
            <div className={styles.aboutImageWrapper}>
              <img
                className={styles.aboutImage}
                src="/site pics/9.png"
                alt="Healthcare Illustration"
              />
            </div>
          </div>
        </section>

        <section className={styles.contactUs}>
          <h2>Contact Us</h2>
          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <FaMapMarkerAlt size={24} />
              <h3>ADDRESS</h3>
              <p>Inzegane, Agadir, Souss massa Draa</p>
            </div>
            <div className={styles.infoCard}>
              <FaPhone size={24} />
              <h3>CONTACT US</h3>
              <p>+212623323823</p>
            </div>
            <div className={styles.infoCard}>
              <FaEnvelope size={24} />
              <h3>EMAIL</h3>
              <p>achraf.azizi@e-polytechnique.ma</p>
            </div>
          </div>
          <div className={styles.contactSection}>
            <div className={styles.contactForm}>
              <ContactForm />
            </div>
            <div className={styles.mapLocation}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13489.831871205897!2d-8.500751!3d30.431012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdabe0cbbd29f39d%3A0x929ae2cb741d65b3!2sInzegane%2C%20Agadir%2C%20Souss%20Massa%20Draa!5e0!3m2!1sen!2sma!4v1692787463795!5m2!1sen!2sma"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
