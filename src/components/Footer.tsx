import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.footerGrid}>
          <div className={styles.footerSection}>
            <h4>ALGAIR</h4>
            <p>Engineering biological solutions for environmental challenges.</p>
            <p className={styles.mission}>
              Combining biology and engineering to capture emissions at the source.
            </p>
          </div>

          <div className={styles.footerSection}>
            <h4>Navigation</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/problem">Problem</Link>
              </li>
              <li>
                <Link href="/technology">Technology</Link>
              </li>
              <li>
                <Link href="/prototype">Prototype</Link>
              </li>
              <li>
                <Link href="/research">Research</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Resources</h4>
            <ul>
              <li>
                <Link href="/impact">Impact</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/">View Pitch Deck</Link>
              </li>

            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <p>
              <strong>Project Email</strong>
              <br />

              <a href="mailto:arorakrishvee@gmail.com">arorakrishvee@gmail.com</a>
              <br />
              <a href="mailto:ayushaggarwal272009@gmail.com">ayushaggarwal272009@gmail.com</a>

            </p>
            <p>
              <strong>Website</strong>
              <br />
              <a href="https://algair.vercel.app">algair.vercel.app</a>
            </p>
          </div>
        </div>

        <div className={styles.footerDivider}></div>

        <div className={styles.footerBottom}>
          <p>
            © {currentYear} ALGAIR. Engineering meets biology. All rights reserved.
          </p>
          <div className={styles.footerLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
