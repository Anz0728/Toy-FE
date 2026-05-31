export const MOCK_EXCUSES = [
  {
    id: 1,
    nickname: '지각대장',
    emotion: '😅',
    content: '지하철에 외계인이 나타나서 결투하느라 좀 늦었습니다.',
    likes: 124,
    category: '지각',
    createdAt: '2026-05-16 09:00',
  },
  {
    id: 2,
    nickname: '운동싫어',
    emotion: '😴',
    content: '스쿼트 하려고 했는데 지구가 저를 너무 세게 당겨서 못 일어났어요.',
    likes: 85,
    category: '운동',
    createdAt: '2026-05-16 10:30',
  },
  {
    id: 3,
    nickname: '다이어터',
    emotion: '🍕',
    content: '피자는 채소(밀, 토마토, 버섯)가 많이 들어가서 샐러드라고 생각하고 먹었습니다.',
    likes: 210,
    category: '다이어트',
    createdAt: '2026-05-16 12:15',
  },
];

export const HALL_OF_FAME = [
  { id: 3, content: '피자는 채소 샐러드입니다.', likes: 210 },
  { id: 1, content: '지하철 외계인 결투...', likes: 124 },
  { id: 2, content: '지구의 중력이 너무 세서...', likes: 85 },
];

export const CURRENT_VOTE = {
  question: '월요일 아침, 더 설득력 있는 핑계는?',
  optionA: '배탈이 심하게 났다',
  optionB: '지하철을 반대 방향으로 탔다',
  votesA: 45,
  votesB: 55,
};
