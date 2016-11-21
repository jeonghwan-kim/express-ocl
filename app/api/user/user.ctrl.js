// api/user/user.ctrl.js

let users = [
  {id: 1, name: 'alice'},
  {id: 2, name: 'bek'},
  {id: 3, name: 'chris'}
];

const index = (req, res) => res.json(users);
const show = (req, res) => {
  const user = users.filter(u => u.id == req.params.id)[0];
  if (user) return res.json(user);
  res.status(404).end();
};
const create = (req, res) => {
  if (!req.body.name) return res.status(400).end();

  const user = {id: Date.now(), name: req.body.name}
  users.push(user);
  res.status(201).json(user);
};
const update = (req, res) => {
  if (!req.body.name) return res.status(400).end();

  const user = users.filter(u => u.id == req.params.id)[0];
  if (!user) return res.status(404).end();

  user.name = req.body.name;
  res.json(user);
};
const destory = (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.status(204).end();
};

module.exports = {index, show, create, update, destory};
