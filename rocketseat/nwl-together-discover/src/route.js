const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')

const route = express.Router()

route.get('/', (req, res) => res.render('index'))
route.get('/room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('create-pass'))

//Formato de informação que o modal deve passar
//route.post('/room/:room/:question/:action')

module.exports = route