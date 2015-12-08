'use strict';

const request = require('supertest');
const app = require('../app.js');

describe('Application', function () {
    describe('GET /', function () {
        it('should return 200', function (done) {
            request(app)
                .get('/')
                .expect(200, done)
            ;
        });
    });

    describe('POST /', function () {
        it('should return 201', function (done) {
            request(app)
                .post('/')
                .send({title: 'Page title'})
                .expect(201)
                .expect('Content-Type', /json/)
                .expect({data: {title: 'Created Page title'}}, done)
            ;
        });
    });
});
