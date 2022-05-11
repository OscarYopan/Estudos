const express = require('express')
const QuestionController = require('./controllers/questionController')

const req = require('express/lib/request')
const res = require('express/lib/response')

const route = express.Router()

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))

route.get('/room', (req, res) => res.render('room'))

//Formato de informação que o modal deve passar
route.post('/room/:room/:question/:action', QuestionController.index)

module.exports = route