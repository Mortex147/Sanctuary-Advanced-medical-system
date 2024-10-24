/* eslint-disable @next/next/no-img-element */

import Navbar from "../components/Navbar";
import styles from "../styles/index.module.scss"; // Import the CSS Module
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faCalendarAlt,
  faPlay,
} from "@fortawesome/free-solid-svg-icons"; // Import icons
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.rectangle}>
          <div className={styles["heading-wrapper"]}>
            <h1 className={styles.heading}>Sanctuary</h1>
          </div>
          <div className={styles["image-wrapper"]}>
            <img
              className={styles.image}
              src="/site pics/1.png"
              alt="Description of image"
            />
          </div>
          <div
            className={`${styles["text-wrapper"]} ${styles["diagnosis-wrapper"]}`}
          >
            <FontAwesomeIcon icon={faHeartbeat} className={styles.icon} />
            <span>Diagnosis</span>
          </div>
          <div
            className={`${styles["text-wrapper"]} ${styles["appointments-wrapper"]}`}
          >
            <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
            <span>Appointments</span>
          </div>
        </div>

        <div className={styles["small-rectangles-container"]}>
          <div className={`${styles["small-rectangle"]} ${styles.color1}`}>
            <div className={styles.title}>
              Book <br />
              Appointment
            </div>
            <div className={styles.subtitle}>Confirmed Appointments</div>
            <div className={styles.rectangle_button}>
              <img
                className={styles.icon1}
                src="/site pics/Arrow.png"
                alt="Arrow"
              />{" "}
            </div>
            <div className={styles.rectangle_img}>
              <img
                className={styles.icon2}
                src="/site pics/3.png"
                alt="Image"
              />
            </div>
          </div>

          <div className={`${styles["small-rectangle"]} ${styles.color2}`}>
            <div className={styles.title}>Queue Status</div>
            <div className={styles.subtitle}>
              Queue online and make your life easier
            </div>

            <div className={styles.rectangle_button}>
              <img
                className={styles.icon1}
                src="/site pics/Arrow.png"
                alt="Arrow"
              />{" "}
            </div>
            <div className={styles.rectangle_img}>
              <img
                className={styles.icon2}
                src="/site pics/7.png"
                alt="Image"
              />
            </div>
          </div>

          <div className={`${styles["small-rectangle"]} ${styles.color3}`}>
            <div className={styles.title}>Medical Records</div>
            <div className={styles.subtitle}>Check your diagnosis online</div>
            <div className={styles.rectangle_button}>
              <img
                className={styles.icon1}
                src="/site pics/Arrow.png"
                alt="Arrow"
              />{" "}
            </div>
            <div className={styles.rectangle_img}>
              <img
                className={styles.icon2}
                src="/site pics/4.png"
                alt="Image"
              />
            </div>
          </div>
          <div className={`${styles["small-rectangle"]} ${styles.color4}`}>
            <div className={styles.title}>Pay Online</div>
            <div className={styles.subtitle}>Billing details</div>
            <div className={styles.rectangle_button}>
              <img
                className={styles.icon1}
                src="/site pics/Arrow.png"
                alt="Arrow"
              />{" "}
            </div>
            <div className={styles.rectangle_img}>
              <img
                className={styles.icon2}
                src="/site pics/2.png"
                alt="Image"
              />
            </div>
          </div>
        </div>

        <h2 className={styles["reviews-title"]}>
          Our doctors and clinics have earned over <br />
          5,000+ reviews on Google!
        </h2>

        <div className={styles["reviews-section"]}>
          <div className={styles["reviews-container"]}>
            <div className={styles["large-rectangle"]}>
              <div className={styles["large-title"]}>
                Nutrition And
                <br /> Mental Health
              </div>
              <div className={styles["large-subtitle"]}>
                The food we eat provides the nutrients <br /> that our bodies
                need to function <br /> properly.
              </div>
              <div className={styles["large-img-container"]}>
                <img
                  className={styles["large-arrow-img"]}
                  src="/site pics/Arrow.png"
                  alt="Arrow"
                />
                <img
                  className={styles["large-picture"]}
                  src="/site pics/13.png"
                  alt="Clinic"
                />
              </div>
            </div>
            <div className={styles["small-rectangles-column"]}>
              <div className={`${styles["wide-rectangle"]}`}>
                <div className={styles.title1}>
                  Healthy Habits for a <br /> happy heart
                </div>
                <img
                  className={styles.icon4}
                  src="/site pics/10.png"
                  alt="Care"
                />
              </div>
              <div className={styles["small-rectangles-row"]}>
                <div className={`${styles["small-rectangle-top"]}`}>
                  <div className={styles.title2}>09</div>
                  <div className={styles.subtitle2}>Years of experience</div>
                  <img
                    className={styles.icon3}
                    src="/site pics/2.png"
                    alt="Facilities"
                  />
                </div>
                <div
                  className={`${styles["small-rectangle-top"]} ${styles.color5}`}
                >
                  <div className={styles.title2}>150k</div>
                  <br />
                  <div className={styles.subtitle2}>Happy Customers</div>
                  <img
                    className={styles.icon3}
                    src="/site pics/12.png"
                    alt="Doctors"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Section */}
        <section className={styles["appointment-section"]}>
          <div className={styles["appointment-rectangle"]}>
            {/* Right Side */}
            <div className={styles["right-side"]}>
              <h2 className={styles["book-title"]}>
                Book An <br />
                Appointment
              </h2>
              <button className={styles["book-button"]}>Book Now</button>
            </div>
            {/* Form Container */}
            <div className={styles["form-container"]}>
              <div className={styles["form-column"]}>
                <label className={styles["form-label"]}>Full Name</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Name"
                />
                <label className={styles["form-label"]}>Email</label>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="Email"
                />
                <label className={styles["form-label"]}>Phone</label>
                <input
                  type="tel"
                  className={styles.input}
                  placeholder="Phone"
                />
              </div>
              <div className={styles["form-column"]}>
                <label className={styles["form-label"]}>Date</label>
                <select className={styles.input}>
                  <option value="">Select Date</option>
                </select>
                <label className={styles["form-label"]}>
                  Share Your Message
                </label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Your message"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.queueSystemSection}>
          <div className={styles.queueSystemRectangle}>
            <div className={styles.queueImageWrapper}>
              <img
                className={styles.queueImage}
                src="/site pics/11.png"
                alt="Queue System"
              />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.queueTitle}>
                Revolutionize Your Hospital Experience with our queue system
              </h2>
              <h3 className={styles.subtitle3}>
                Introducing Our New Queue System – Skip the Lines and <br />
                Know Exactly When to Arrive
              </h3>
              <button className={styles.learnMoreButton}>Learn More</button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
