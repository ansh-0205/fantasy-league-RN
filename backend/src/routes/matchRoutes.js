const express = require('express');
const router = new express.Router();
const authentication = require('../middlewares/auth');

const {
    fixtures,
    teams,
    standings,
    topScorer
} = require('../controllers/matchController');

router.get('/fixtures',authentication.verifyToken, fixtures);
router.get('/teams',authentication.verifyToken, teams);
router.get('/standings',authentication.verifyToken, standings);
router.get('/topScorer',authentication.verifyToken, topScorer);
module.exports = router;
