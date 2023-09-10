import React from 'react';
import express from 'express';
import bodyParser from 'body-parser';
import { renderToString } from 'react-dom/server';

import { TodoItem } from './components/TodoItem';
import { TodoItemList } from './components/TodoItemList';

import todoItems from './data/todo-items.json';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/items', async (req, res) => {
  res.send(renderToString(<TodoItemList items={todoItems} />));
});

app.post('/items', async (req, res) => {
  const { body } = req;
  const { message } = body;

  todoItems.push({ message });

  res.send(renderToString(<TodoItem message={message} />));
});

app.listen(port, () => {
  console.log(`Home page at http://localhost:${port}/index.html`);
});
