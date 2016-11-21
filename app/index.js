const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 유저 데이터
let users = [
  {id: 1, name: 'alice'},
  {id: 2, name: 'bek'},
  {id: 3, name: 'chris'}
];

app.get('/users', (req, res) => res.json(users));
app.get('/users/:id', (req, res) => {
  const user = users.filter(u => u.id == req.params.id)[0];
  if (user) return res.json(user);

  res.status(404).end();
});
app.post('/users', (req, res) => {
  if (!req.body.name) return res.status(400).end();

  const user = {id: Date.now(), name: req.body.name}
  users.push(user);
  res.status(201).json(user);
});
app.put('/users/:id', (req, res) => {
  if (!req.body.name) return res.status(400).end();

  const user = users.filter(u => u.id == req.params.id)[0];
  if (!user) return res.status(404).end();

  user.name = req.body.name;
  res.json(user);
});
app.delete('/users/:id', (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.status(204).end();
});

app.listen(3000, () => console.log('Listening on port 3000'));
