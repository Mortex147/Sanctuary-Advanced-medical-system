import { FaClipboardList } from "react-icons/fa";
import styles from "../styles/billing.module.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BillingPage: React.FC = () => {
  return (
    <div className={styles.billingPage}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.breadcrumb}>
          <span>Home</span> &gt; <span>Billing</span>
        </div>

        <div className={styles.container}>
          <div className={styles.results}>
            <h2>Overall Results</h2>
            <div className={styles.resultRow}>
              <div className={styles.icon}>
                <FaClipboardList />
              </div>
              <div className={styles.description}>
                <span>Appointment n1</span>
                <span>$250</span>
              </div>
            </div>
            <div className={styles.resultRow}>
              <div className={styles.icon}>
                <FaClipboardList />
              </div>
              <div className={styles.description}>
                <span>Appointment n2</span>
                <span>$250</span>
              </div>
            </div>
          </div>

          <div className={styles.cardTotals}>
            <h2>Card Totals</h2>
            <div className={styles.totalRow}>
              <span>Sub-total</span>
              <span>$320</span>
            </div>
            <div className={styles.totalRow}>
              <span>Tax</span>
              <span>$61.99</span>
            </div>
            <div className={styles.totalRow}>
              <span>Total</span>
              <span>$357.99 USD</span>
            </div>
            <button className={styles.checkoutButton}>
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BillingPage;
