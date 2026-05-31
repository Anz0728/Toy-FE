import React, { useState } from 'react';
import styles from './ExcuseForm.module.css';

const EMOTIONS = ['😅', '😴', '🍕', '😭', '🔥', '🤔'];
const CATEGORIES = ['지각', '결석', '운동', '다이어트', '기타'];

const ExcuseForm = ({ onAdd }) => {
  const [content, setContent] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [selectedEmotion, setSelectedEmotion] = useState('😅');
  const [selectedCategory, setSelectedCategory] = useState('지각');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content || !nickname || !password) return alert('모든 필드를 입력해주세요!');

    const newExcuse = {
      nickname,
      password,
      content,
      category: selectedCategory,
      emotionTag: selectedEmotion,
    };

    onAdd(newExcuse);
    setContent('');
    setNickname('');
    setPassword('');
  };

  return (
    <div className={styles.formCard}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
        </div>
        
        <textarea
          placeholder="당신의 신박한 핑계를 공유해보세요..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.textarea}
        />

        <div className={styles.options}>
          <div className={styles.emotionPicker}>
            {EMOTIONS.map(emo => (
              <span
                key={emo}
                className={`${styles.emotion} ${selectedEmotion === emo ? styles.active : ''}`}
                onClick={() => setSelectedEmotion(emo)}
              >
                {emo}
              </span>
            ))}
          </div>
          
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={styles.select}
          >
            {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>

        <button type="submit" className={styles.submitBtn}>핑계 올리기</button>
      </form>
    </div>
  );
};

export default ExcuseForm;
