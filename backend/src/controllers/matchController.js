//importing modules
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());
const fetch = require('node-fetch');
const dotenv = require('dotenv').config({ path: 'src/.env' });
const url = 'https://apiv2.allsportsapi.com/football/';
const Match = require('../models/matchSchema');
//teams
const teams = async(req,res)=>{
    const Url = url +`?&met=Teams&teamId=${req.body.id}&APIkey=${process.env.API_KEY}`;
    const options = {
        method: 'GET'
    }
    fetch(Url,options)
     .then(res=>res.json())
     .then(json=>{
        res.status(200).json(json)
     })
}
//fixtures
const fixtures = async(req,res)=>{
    let i=0;
    const Url = url+`?met=Fixtures&APIkey=${process.env.API_KEY}&from=2021-05-14&to=2021-05-18`
    const options = {
        method: 'GET'
    }
    fetch(Url,options)
    .then(res=>res.json())
    .then(json => {
        for( i=0;i<json.result.length;i++){
            let team1 = json.result[i].event_home_team;
            let team2 = json.result[i].event_away_team;
            let matchId = json.result[i].event_key;
            const match = new Match({team1: team1, team2: team2, matchId:matchId});
            match.save();
        }
        res.status(200).json({message:'Success'});
    })
    .catch(err => console.error('error:'+err));
}
//standings
const standings = async(req,res)=>{
    const Url = url +`?&met=Standings&leagueId=${req.body.id}&APIkey=${process.env.API_KEY}`;
    const options = {
        method: 'GET'
    }
    fetch(Url,options)
     .then(res=>res.json())
     .then(json=>{
        res.status(200).json(json)
     })
}
//topScorer
const topScorer = async(req,res)=>{
    const Url = url +`?&met=Topscorer&leagueId=${req.body.id}&APIkey=${process.env.API_KEY}`;
    const options = {
        method: 'GET'
    }
    fetch(Url,options)
     .then(res=>res.json())
     .then(json=>{
        res.status(200).json(json)
     })
}


//exporting routes
module.exports = { fixtures , teams , standings , topScorer };
