const path = require('path');
const express = require('express');

const todos = [{ id: 1, text: 'Todo 1' }];

const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());

app.get('/todos', (_, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const todo = { id: todos.length + 1, text: req.body.text };

  todos.push(todo);
  res.json(todo);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
