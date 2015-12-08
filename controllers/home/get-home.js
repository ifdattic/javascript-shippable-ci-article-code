'use strict';

function home(request, response) {
    response.render('index', {title: 'Express'});
};

module.exports = home;
