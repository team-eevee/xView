const express = require('express');
const router = express.Router();
require('dotenv').config();
const session = require('express-session');
const request = require('request');
const qs = require('querystring');
const randomString = require('uuid');
const csrfString = randomString();

const appController = require('../controllers/app-controller');

router.get('/getUser', (req, res) => {

});

router.get('/getApps', (req, res) => {

});

router.post('/createApp', (req, res) => {

});

router.delete('/deleteApp', (req, res) => {

});

router.patch('/updateApp', (req, res) => {

});

module.exports = router;
