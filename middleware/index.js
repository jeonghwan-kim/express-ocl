const app = require('express')();
app.use((req, res, next) => {
  console.log('middleware 1');
  next('error 1');
});
app.use((error, req, res, next) => {
  console.log('middleware 2', error);
  next(error);
});
app.get('/', (req, res, next) => {
  console.log('middleware 3');
  next();
}, (req, res) => {
  console.log('router GET /');
  res.send('hello world\n')
});
app.listen(3000, _=> console.log('Run server'));