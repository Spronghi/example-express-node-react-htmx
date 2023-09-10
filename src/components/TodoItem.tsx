import React from 'react';

export function TodoItem(props: { message: string }) {
  const { message } = props;

  return <p>{message}</p>;
}
