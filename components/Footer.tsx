import styles from "../styles/Home.module.css";

type FooterProps = {
  page: "privacy" | "home";
};

export const Footer = ({ page }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.links} aria-label="Footer navigation">
        <a
          className={styles.link}
          href="mailto:contact@infinitydungeon.com"
          aria-label="Contact us via email"
        >
          Contact Us
        </a>
        <a
          className={styles.link}
          href={page === "privacy" ? "/" : "/privacy-policy"}
        >
          {page === "privacy" ? "Home" : "Privacy Policy"}
        </a>
      </nav>
      <div className={styles.social} role="group" aria-label="Social links">
        <a
          className={`${styles["social-button"]} ${styles["social-button--x"]}`}
          href="https://x.com/InfinityDungeon"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow Infinity Dungeon on X (Twitter)"
        >
          <span>@infinitydungeon</span>
          <span className={styles["social-icon-x"]} aria-hidden="true">
            𝕏
          </span>
        </a>
        <a
          className={styles["social-button"]}
          href="https://discord.gg/CBby6Tnbjb"
          target="_blank"
          rel="noreferrer"
          aria-label="Join the Infinity Dungeon Discord server"
        >
          <span>Discord</span>
          <span
            className={`${styles["social-icon"]} ${styles["social-icon--discord"]}`}
            aria-hidden="true"
          />
        </a>
      </div>
    </footer>
  );
};
