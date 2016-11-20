const should = require('should');
const request = require('supertest');
const app = require('../../');
const models = require('../../models');

describe('User', () => {
    const users = [
        {name: 'alice'},
        {name: 'bek'},
        {name: 'chris'}
    ]
    before('sync database', () => models.sequelize.sync({force: true}));
    before('insert seed data', () =>  models.User.bulkCreate(users));
    describe('GET /users', () => {
        it('should return user array', done => {
            request(app)
                .get('/users')
                .expect(200)
                .end((err, res) => {
                    if (err) throw err;
                    res.body.should.be.instanceOf(Array).with.length(users.length)
                    done();
                });
        });
    });
    describe('GET /users/:id', () => {
        it('should return user object', done => {
            request(app)
                .get('/users/1')
                .expect(200)
                .end((err, res) => {
                    if (err) throw err;
                    res.body.should.have.property('name', users[0].name)
                    done();
                });
        });
    });
    describe('POST /users', () => {
        it('should return new user', done => {
            request(app)
                .post('/users')
                .send({name: 'daniel'})
                .expect(201)
                .end((err, res) => {
                    if (err) throw err;
                    res.body.should.have.property('name', 'daniel')
                    done();
                });
        });
    });  
    describe('PUT /users/:id', () => {
        it('should update username', done => {
            request(app)
                .put('/users/4')
                .send({name: 'david'})
                .expect(200)
                .end((err, res) => {
                    if (err) throw err;
                    res.body.should.have.property('name', 'david')
                    done();
                });
        });
    });  
    describe('DELETE /users/:id', () => {
        it('should delete user by id', done => {
            request(app)
                .delete('/users/4')
                .expect(204)
                .end(done);
        });
    });  
});