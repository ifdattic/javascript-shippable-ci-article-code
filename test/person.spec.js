'use strict';

const should = require('chai').should();
const Person = require('../models/person');

const config = require('../config/config');
const mongoose = require('mongoose');

describe('Person model', function () {
    const personsCollectionName = Person.collection.collectionName;

    before(function (done) {
        mongoose.disconnect();
        mongoose.connect(config.database, function (error) {
            done(error);
        });
    });

    after(function (done) {
        mongoose.connection.close();

        done();
    });

    beforeEach(function (done) {
        mongoose.connection.db.dropCollection(personsCollectionName, function (error, results) {
            if (error && 'ns not found' != error.errmsg) {
                return done(error);
            }

            const person = new Person({
                _id: '5663d82482f0d4f7582802a7',
                firstName: 'John',
                lastName: 'Doe'
            });

            person.save(done);
        });
    });

    it('should find person by full name', function (done) {
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
