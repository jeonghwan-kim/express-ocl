const models = require('../app/models');
const app = require('../app');

models.sequelize.sync({force: true}).then(() => {
    console.log('database is synced');
    app.listen(3000, () => console.log('Listening on port 3000'));
});
