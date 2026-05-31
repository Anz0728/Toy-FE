import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Excuse 관련 API
export const getExcuses = () => api.get('/excuses');
export const createExcuse = (excuseData) => api.post('/excuses', excuseData);
export const likeExcuse = (id) => api.post(`/excuses/${id}/like`);
export const getHallOfFame = () => api.get('/excuses/hall-of-fame');

// Vote 관련 API
export const getCurrentVote = () => api.get('/votes/current');
export const castVote = (id, option) => api.post(`/votes/${id}/vote`, { option });

export default api;
