import React from 'react';
import '../scss/TodoMain.scss';
import TodoItem from './TodoItem';

const TodoMain = () => {
  return (
    <ul className='todoList'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </ul>
  );
};

export default TodoMain;
