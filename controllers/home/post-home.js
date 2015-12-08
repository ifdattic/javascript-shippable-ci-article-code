'use strict';

function home(request, response) {
    response.status(201).json({
        data: {
            title: 'Created ' + request.body.title
        }
    });
};

module.exports = home;
