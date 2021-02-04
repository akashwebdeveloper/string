const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    string:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports =  mongoose.model("Post",postSchema)