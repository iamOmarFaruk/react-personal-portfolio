import styles from "./navbar.module.scss";
const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.wrapper}>
          <a href="/" className={styles.logo}>
            React Folio
          </a>
          <div className={styles["nav-menu"]}>
            <a className={styles["nav-item"]}>Home</a>
            <a className={styles["nav-item"]}>About</a>
            <a className={styles["nav-item"]}>Services</a>
            <a className={styles["nav-item"]}>Portfolio</a>
            <a className={styles["nav-item"]}>Contact</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
