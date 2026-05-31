import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/layout/Hero';
import ExcuseList from './components/excuse/ExcuseList';
import ExcuseForm from './components/excuse/ExcuseForm';
import HallOfFame from './components/sidebar/HallOfFame';
import VoteBox from './components/sidebar/VoteBox';
import BattleBanner from './components/sidebar/BattleBanner';
import styles from './App.module.css';
import { getExcuses, getHallOfFame, getCurrentVote, createExcuse } from './services/api';

function App() {
  const [excuses, setExcuses] = useState([]);
  const [hallOfFame, setHallOfFame] = useState([]);
  const [currentVote, setCurrentVote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [excusesRes, hofRes, voteRes] = await Promise.all([
          getExcuses(),
          getHallOfFame(),
          getCurrentVote()
        ]);
        setExcuses(excusesRes.data);
        setHallOfFame(hofRes.data);
        setCurrentVote(voteRes.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddExcuse = async (newExcuseData) => {
    try {
      const response = await createExcuse(newExcuseData);
      setExcuses([response.data, ...excuses]);
    } catch (error) {
      console.error('Failed to add excuse:', error);
      alert('핑계 등록에 실패했습니다.');
    }
  };

  if (loading) {
    return <div className={styles.loading}>로딩 중...</div>;
  }

  return (
    <div className={styles.container}>
      <Header />
      <Hero bestExcuse={hallOfFame[0]?.content || "신박한 핑계를 기다리고 있어요!"} />
      
      <main className={styles.main}>
        <section className={styles.leftContent}>
          <ExcuseForm onAdd={handleAddExcuse} />
          <ExcuseList excuses={excuses} />
        </section>
        
        <aside className={styles.sidebar}>
          <HallOfFame items={hallOfFame} />
          {currentVote && <VoteBox vote={currentVote} />}
          <BattleBanner />
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;
