/* eslint-disable @next/next/no-html-link-for-pages */
// Footer.tsx
import React from "react";
import Image from "next/image";
import styles from "../styles/footer.module.scss";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image src="/site pics/logo.png" alt="Logo" width={150} height={32} />
      </div>
      <nav className={styles.navLinks}>
        <a href="/home">Home</a>
        <a href="/appointments">Appointments</a>
        <a href="/billing">Billing</a>
        <a href="/aboutus">About us</a>
        <a href="/login">Profile</a>
      </nav>
      <hr className={styles.divider} />
      <div className={styles.bottomSection}>
        <span>Made with love by Achraf Azizi. All rights reserved.</span>
        <span className={styles.address}>123 Your Address, City, Country</span>
        <div className={styles.socialIcons}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
