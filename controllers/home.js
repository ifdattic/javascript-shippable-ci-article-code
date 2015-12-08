'use strict';

const express = require('express');
const router = express.Router();

const getHome = require('./home/get-home');
const postHome = require('./home/post-home');

router.route('/')
    .get(getHome)
    .post(postHome)
;

module.exports = router;
