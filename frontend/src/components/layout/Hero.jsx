import React from 'react';
import styles from './Hero.module.css';

const Hero = ({ bestExcuse }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>오늘의 베스트 핑계 🏆</div>
      <h2 className={styles.content}>"{bestExcuse}"</h2>
    </section>
  );
};

export default Hero;
