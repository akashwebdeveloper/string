const mongoose = require('mongoose')
const scoreboardSchema = new mongoose.Schema({
    uniqueId:{
        type:Number,
        required:true
    },
    token:{
        type:String,
        required:true
    },
    myPoint:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
})

module.exports =  mongoose.model("Scoreboard",scoreboardSchema);