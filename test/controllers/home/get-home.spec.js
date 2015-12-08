'use strict';

const should = require('chai').should();
const sinon = require('sinon');

const getHome = require('../../../controllers/home/get-home');

describe('Home controller', function () {
    describe('GET /', function () {
        it('should render the page', function () {
            let request, response, spy;

            request = response = {};
            spy = response.render = sinon.spy();

            getHome(request, response);

            spy.withArgs('index').calledOnce.should.be.true;
        });
    });
});
