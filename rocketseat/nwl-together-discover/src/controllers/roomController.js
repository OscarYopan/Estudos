const Database = require('../db/config')

module.exports = {
  create(req, res){
    let roomId = null

    for(var i = 0; i < 6; i++){
      i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
      roomId += Math.floor(Math.random() * 10).toString()
    }



    res.redirect(`/room/${roomId}`)    
  }
}