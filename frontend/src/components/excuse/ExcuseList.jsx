import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ExcuseItem from './ExcuseItem';
import styles from './ExcuseList.module.css';

const ExcuseList = ({ excuses }) => {
  return (
    <div className={styles.list}>
      <h3 className={styles.title}>실시간 핑계 피드 📢</h3>
      <AnimatePresence initial={false}>
        {excuses.map(excuse => (
          <motion.div
            key={excuse.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ExcuseItem excuse={excuse} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ExcuseList;
