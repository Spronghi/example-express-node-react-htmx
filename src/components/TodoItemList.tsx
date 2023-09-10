import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoItemList(props: { items: { message: string }[] }) {
  const { items } = props;

  return (
    <div id="todo-items">
      {items.map(({ message }, index) => (
        <TodoItem message={message} key={index} />
      ))}
    </div>
  );
}
