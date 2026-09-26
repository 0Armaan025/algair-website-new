"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/problem", label: "Problem" },
    { href: "/technology", label: "Technology" },
    { href: "/prototype", label: "Prototype" },
    { href: "/research", label: "Research" },
    { href: "/impact", label: "Impact" },
    { href: "/team", label: "Team" },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>ALGAIR</span>
          <span className={styles.tagline}>Engineering meets Biology</span>
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/" className="btn btn-primary btn-small">
            Explore ALGAIR
          </Link>
        </div>
      </div>
    </nav>
  );
}
