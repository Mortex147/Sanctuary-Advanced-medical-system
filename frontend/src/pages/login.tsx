import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { FaGoogle, FaTimes } from "react-icons/fa";
import styles from "../styles/login.module.scss";

const LoginPage: React.FC = () => {
  const handleClose = () => {
    window.location.href = "/";
  };

  const handleSignIn = async (provider: string) => {
    try {
      await signIn(provider);
    } catch (error) {
      console.error("Sign in error:", error);
      // Optionally, show a user-friendly error message
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close"
        >
          <FaTimes />
        </button>
        <a href="/" className={styles.logo}>
          <Image src="/site pics/logo.png" alt="Logo" width={150} height={32} />
        </a>
        <div style={{ display: "flex", flex: 1 }}>
          <div className={styles.section}>
            <h2>Log in</h2>
            <button
              className={styles.button}
              onClick={() => handleSignIn("google")}
            >
              <FaGoogle style={{ marginRight: "10px", color: "green" }} />
              Continue with Google
            </button>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.section}>
            <h2>Sign Up</h2>
            <button
              className={styles.button}
              onClick={() => handleSignIn("google")}
            >
              <FaGoogle style={{ marginRight: "10px", color: "green" }} />
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
