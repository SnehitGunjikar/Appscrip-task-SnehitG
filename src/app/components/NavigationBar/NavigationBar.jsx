"use client";

import styles from "./NavigationBar.module.css";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.navigationBar}>
      <div className={styles.left}>
        <button
          className={styles.menuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Image
            src="/icons/hamburger-menu.svg"
            alt="Menu"
            width={20}
            height={20}
          />
        </button>

        <Image
          src="/icons/Logo.svg"
          alt="Brand Logo"
          width={36}
          height={36}
          className={clsx(styles.brandIcon, styles.icon)}
        />
      </div>

      <div className={styles.center}>
        <span className={styles.brandName}>L O G O</span>
      </div>

      <div className={styles.right}>
        <Image
          src="/icons/search-normal.svg"
          alt="Search"
          width={24}
          height={24}
          className={styles.icon}
        />
        <Image
          src="/icons/heart.svg"
          alt="Wishlist"
          width={24}
          height={24}
          className={styles.icon}
        />
        <Image
          src="/icons/shopping-bag.svg"
          alt="Cart"
          width={24}
          height={24}
          className={styles.icon}
        />

        <div className={styles.accountIcon}>
          <Image
            src="/icons/profile.svg"
            alt="Account"
            width={24}
            height={24}
            className={styles.icon}
          />
        </div>
        
        <div className={styles.languageSelector}>
          <p className={styles.languageText}>ENG</p>
        </div>
      </div>
    </header>
  );
}