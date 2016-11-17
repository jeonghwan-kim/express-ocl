const app = require('express')();
const firstM = (req, res, next) => {
  console.log('1st middleware');
  next();
};
const secondM = (err, req, res, next) => {
  console.log('2nd error middleware: logging in files');
  next(err)
};
const thirdM = (req, res, next) => {
  console.log('3nd error middleware: only in GET /');
  next()
};


app.use(firstM);
app.use(secondM);
app.get('/', thirdM, (req, res) => res.send('hello world\n'));

app.listen(3000, _=> console.log('Run server'));