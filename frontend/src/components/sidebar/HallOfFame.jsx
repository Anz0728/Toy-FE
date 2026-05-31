import React from 'react';
import styles from './HallOfFame.module.css';

const HallOfFame = ({ items }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>명예의 전당 🏆</h3>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={item.id} className={styles.item}>
            <span className={styles.rank}>{index + 1}</span>
            <div className={styles.contentBox}>
              <p className={styles.content}>{item.content}</p>
              <span className={styles.likes}>👍 {item.likes}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HallOfFame;
