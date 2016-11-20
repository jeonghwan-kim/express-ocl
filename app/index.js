const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const models = require('./models');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', require('./api/user'));

models.sequelize.sync({force: true}).then(() => {
    console.log('database is synced');
    app.listen(3000, () => console.log('Listening on port 3000'));
});
