import styles from "../../styles/Home.module.css";

const Footer = ({ year }) => {
  return <footer className={styles.footer}>&copy; leboncoin - {year}</footer>;
};

export default Footer;
