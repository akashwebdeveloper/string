const mongoose = require('mongoose')
const scoreboardSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    _token:{
        type:String,
        required:true
    },
    mypoint:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
})

module.exports =  mongoose.model("Scoreboard",scoreboardSchema);