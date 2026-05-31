import React, { useState } from 'react';
import styles from './ExcuseItem.module.css';
import { likeExcuse } from '../../services/api';

const ExcuseItem = ({ excuse }) => {
  const [likes, setLikes] = useState(excuse.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    if (isLiked) return; // 이미 인정했으면 중복 방지 (백엔드 로직에 따라 조절 가능)
    
    try {
      await likeExcuse(excuse.id);
      setLikes(likes + 1);
      setIsLiked(true);
    } catch (error) {
      console.error('Failed to like excuse:', error);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.nickname}>{excuse.nickname}</span>
        <span className={styles.category}>#{excuse.category}</span>
      </div>
      
      <div className={styles.body}>
        <span className={styles.emotion}>{excuse.emotionTag}</span>
        <p className={styles.content}>{excuse.content}</p>
      </div>
      
      <div className={styles.footer}>
        <span className={styles.date}>{new Date(excuse.createdAt).toLocaleString()}</span>
        <button 
          className={`${styles.likeBtn} ${isLiked ? styles.active : ''}`}
          onClick={handleLike}
          disabled={isLiked}
        >
          👍 인정 {likes}
        </button>
      </div>
    </div>
  );
};

export default ExcuseItem;
