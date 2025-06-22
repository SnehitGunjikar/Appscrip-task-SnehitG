"use client";

import styles from "./CategoryMenu.module.css";

const categories = ["Shop", "Collections", "Stories", "About", "Contact"];

export default function SubMenu({ current, active }) {
  return (
    <nav className={styles.categoryMenu}>
      <ul className={styles.desktopMenu}>
        {categories.map((item) => (
          <li key={item} className={styles.menuItem}>
            {item}
          </li>
        ))}
      </ul>

      <div className={styles.mobileMenu}>
        <span className={styles.current}>{current}</span>
        <span className={styles.separator}>|</span>
        <span className={styles.active}>{active}</span>
      </div>
    </nav>
  );
}