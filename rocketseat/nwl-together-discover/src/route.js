const express = require('express')
const QuestionController = require('./controllers/questionController')
const RoomController = require('./controllers/roomController')

const req = require('express/lib/request')
const res = require('express/lib/response')

const route = express.Router()

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route