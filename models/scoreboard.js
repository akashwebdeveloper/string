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
    TotalPlayer:{
        type:String,
        required:true
    },
    Hand:{
        type:String,
        required:true
    },
    highscore:{
        type:String,
        required:true
    },
    balance:{
        type:String,
        required:true
    },
})

module.exports =  mongoose.model("Scoreboard",scoreboardSchema);