import styles from "./navbar.module.scss";
const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.wrapper}>
          <a href="/" className={styles.logo}>
            <pre><code>{`<ReactDeveloper/>`}</code></pre>
          </a>
          <div className={`${styles["nav-menu"]} nav-cta`}>
            <a className={styles["nav-item"]}>Home</a>
            <a className={styles["nav-item"]}>About</a>
            <a className={styles["nav-item"]}>Services</a>
            <a className={styles["nav-item"]}>Portfolio</a>
            <a className={styles["nav-item"]}>Contact</a>
            {/* hire me - ctc button */}
            <a className={`${styles["nav-item"]} ${styles["nav-cta-button"]}`}>Hire Me</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
