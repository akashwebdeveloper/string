const express = require('express')
const router = express.Router()
const Scoreboard =  require('../models/scoreboard')


router.post('/scoreboard',(req,res)=>{
    const { _token,mypoint,id,email } = req.body

    const scoreboard = new Scoreboard({
        _token: _token || "",
        mypoint: mypoint || "",
        id: id || "",
        email: email || ""
    })

    // New User Save to database
    scoreboard.save().then(post => {
        // login
        
        Scoreboard.find({ id: post.id },{'_id':false} ,(err, values) => {
            if (err) {
                return res.status(502).json({
                    success: false,
                    status: 502,
                    message: "err from database"
                })
            }

            if (values) {
                return res.status(200).end(JSON.stringify(values))
            }
        })
    }).catch(err => {
        return res.status(503).json({
            success: 0,
            status: 503,
            message: "err from database",
            err
        })
    })
})


module.exports = router