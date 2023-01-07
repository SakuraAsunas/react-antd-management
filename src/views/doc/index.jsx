import React from 'react';
import TypingCard from '@/components/TypingCard'
const Doc = () => {
  const cardContent = `
    <a href="https://github.com/SakuraAsunas/react-antd-management" target="_blank">樱落神子的github</a>。
  `
  return (
    <div className="app-container">
      <TypingCard title='github' source={cardContent}/>
    </div>
  );
}

export default Doc;