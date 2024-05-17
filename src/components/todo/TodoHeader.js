import React from 'react';
import '../../scss/TodoHeader.scss';

const TodoHeader = ({ count }) => {
  const today = new Date();

  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayName = today.toLocaleDateString('ko-KR', {
    // 표현하고자 하는 태그가 달라서 구분해줌.
    weekday: 'long',
  });

  return (
    <header>
      <h1>{dateString}</h1>
      <div className='day'>{dayName}</div>
      <div className='tasks-left'>
        할 일 {count()}개 남음
      </div>
    </header>
  );
};

export default TodoHeader;
