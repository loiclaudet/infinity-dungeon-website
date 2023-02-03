import styles from "../styles/Home.module.css";

interface PrivacyProps {
  page: "privacy" | "home";
}
export default function Footer({ page }: PrivacyProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a className={styles.link} href="#">
          Credits
        </a>
        <a className={styles.link} href="mailto:contact@infinitydungeon.com">
          Contact Us
        </a>
        <a
          className={styles.link}
          href={page === "privacy" ? "/" : "/privacy-policy"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {page === "privacy" ? "Home" : "Privacy Policy"}
        </a>
      </div>
      <div className={styles.social}>
        <a
          href="https://twitter.com/InfinityDungeon"
          target="_blank"
          rel="noreferrer"
        >
          <button className={styles["social-button"]}>
            <span>Twitter</span>
            <span
              className={`${styles["social-icon"]} ${styles["social-icon--twitter"]}`}
            ></span>
          </button>
        </a>
        <a
          href="https://discord.gg/CBby6Tnbjb"
          target="_blank"
          rel="noreferrer"
        >
          <button className={styles["social-button"]}>
            <span>Discord</span>
            <span
              className={`${styles["social-icon"]} ${styles["social-icon--discord"]}`}
            ></span>
          </button>
        </a>
      </div>
    </footer>
  );
}
