import React from 'react';
import styles from './BattleBanner.module.css';

const BattleBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <h3>핑계 배틀 ⚔️</h3>
        <p>랜덤 매칭으로 더 킹받는 핑계를 골라보세요!</p>
        <button className={styles.btn}>배틀 입장하기</button>
      </div>
    </div>
  );
};

export default BattleBanner;
