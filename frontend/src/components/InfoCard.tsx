// /components/InfoCard.tsx

import styles from "../styles/aboutus.module.scss"; // Ensure this SCSS file is created

interface InfoCardProps {
  title: string;
  content: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, content }) => {
  return (
    <div className={styles.infoCard}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default InfoCard;
