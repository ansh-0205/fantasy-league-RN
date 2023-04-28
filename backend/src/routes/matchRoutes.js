const express = require('express');
const router = new express.Router();
const authentication = require('../middlewares/auth');

const {
    liveFixtures,
    futureFixtures,
    pastFixtures
} = require('../controllers/matchController');
router.get('/liveFixtures', liveFixtures);
router.get('/futureFixtures', futureFixtures);
router.get('/pastFixtures', pastFixtures);
module.exports = router;
