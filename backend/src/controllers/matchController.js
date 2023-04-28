//importing modules
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());
const fetch = require('node-fetch');
const dotenv = require('dotenv').config({ path: 'src/.env' });
const url = 'https://api-football-v1.p.rapidapi.com/v3';
const Match = require('../models/matchSchema');
//live fixtures
const liveFixtures = async (req, res) => {
    const Url = url + `/fixtures?live=all`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    fetch(Url, options)
        .then((res) => res.json())
        .then((json) => {
            res.status(200).json(json[response[teams]]);
        })
        .catch((err) => res.status(400).json({message:err.message}));
};
//futureFixtures
const futureFixtures = async (req, res) => {
    const Url = url + `/fixtures?next=50`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    fetch(Url, options)
        .then((res) => res.json())
        .then((json) => {
            res.status(200).json(json[response[teams]]);
        })
        .catch((err) => res.status(400).json({message:err.message}));
};
//pastFixtures
const pastFixtures = async (req, res) => {
    const Url = url + `/fixtures?last=50`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    fetch(Url, options)
        .then((res) => res.json())
        .then((json) => {
            res.status(200).json(json[response[teams]]);
        })
        .catch((err) => res.status(400).json({message:err.message}));
};
//exporting modules
module.exports = { liveFixtures, futureFixtures, pastFixtures };
