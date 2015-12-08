'use strict';

const should = require('chai').should();
const sinon = require('sinon');
const Person = require('../models/person');

describe('Person model - Mocked', function () {
    let sandbox;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
    });

    afterEach(function () {
        sandbox.restore();
    });

    it('should find person by full name', function (done) {
        const personData = {
            _id: '5663d82482f0d4f7582802a7',
            firstName: 'John',
            lastName: 'Doe'
        };

        const personMock = sandbox.mock(Person);
        personMock.expects('findOne')
            .withArgs({firstName: 'John', lastName: 'Doe'})
            .once()
            .yields(null, new Person(personData));

        const query = {
            firstName: 'John',
            lastName: 'Doe'
        };

        Person.findOne(query, function (error, person) {
            if (error) {
                return done(error);
            }

            should.exist(person);
            person.id.should.equal('5663d82482f0d4f7582802a7');
            person.fullName.should.equal('John Doe');

            done();
        });
    });
});
