import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>오늘의 핑계 😅</h1>
      <nav>
        <ul className={styles.navLinks}>
          <li>피드</li>
          <li>배틀</li>
          <li>랭킹</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
