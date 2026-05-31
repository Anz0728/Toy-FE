import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './VoteBox.module.css';
import { castVote } from '../../services/api';

const VoteBox = ({ vote }) => {
  const [selected, setSelected] = useState(null);
  const [voteStats, setVoteStats] = useState({
    votesA: vote.countA,
    votesB: vote.countB
  });

  const handleVote = async (option) => {
    if (selected) return;

    try {
      await castVote(vote.id, option);
      setSelected(option);
      setVoteStats(prev => ({
        ...prev,
        [option === 'A' ? 'votesA' : 'votesB']: prev[option === 'A' ? 'votesA' : 'votesB'] + 1
      }));
    } catch (error) {
      console.error('Failed to cast vote:', error);
    }
  };

  const total = voteStats.votesA + voteStats.votesB;
  const getPercent = (count) => total === 0 ? 0 : Math.round((count / total) * 100);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>오늘의 핑계 투표 🗳️</h3>
      <p className={styles.question}>{vote.title}</p>
      
      <div className={styles.options}>
        <button 
          className={`${styles.option} ${selected === 'A' ? styles.selected : ''}`}
          onClick={() => handleVote('A')}
          disabled={!!selected}
        >
          <div className={styles.label}>{vote.optionA}</div>
          {selected && (
            <motion.div 
              className={styles.bar} 
              initial={{ width: 0 }}
              animate={{ width: `${getPercent(voteStats.votesA)}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          )}
          {selected && <span className={styles.percent}>{getPercent(voteStats.votesA)}%</span>}
        </button>

        <button 
          className={`${styles.option} ${selected === 'B' ? styles.selected : ''}`}
          onClick={() => handleVote('B')}
          disabled={!!selected}
        >
          <div className={styles.label}>{vote.optionB}</div>
          {selected && (
            <motion.div 
              className={styles.bar} 
              initial={{ width: 0 }}
              animate={{ width: `${getPercent(voteStats.votesB)}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          )}
          {selected && <span className={styles.percent}>{getPercent(voteStats.votesB)}%</span>}
        </button>
      </div>
    </div>
  );
};

export default VoteBox;
