process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config  = {
    development: {
        db: {
            dialect: 'sqlite',
            storage: 'db.development.sqlte'
        }
    },
    test: {
        db: {
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false
        }
    }, 
    production: {
        db: {
            username: 'root',
            password: 'root',
            database: 'apiserver_production',
            host: '127.0.0.1',
            dialect: 'mysql',
            logging: false
        }
    }
}

module.exports = config[process.env.NODE_ENV];