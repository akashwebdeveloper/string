const express = require('express')
const router = express.Router()
const Scoreboard =  require('../models/scoreboard')


router.post('/scoreboard',(req,res)=>{
    const { string } = req.body

    const parse = JSON.parse(string)

    

    const scoreboard = new Scoreboard({
        uniqueId: parse.uniqueId || "",
        token: parse.token || "",
        myPoint: parse.myPoint || "",
        emailId: parse.emailId || ""
    })

    // New User Save to database
    scoreboard.save().then(post => {
        // login
        const uid = JSON.parse(post.uniqueId)
        
        Scoreboard.find({ uniqueId: uid },{'_id':false} ,(err, values) => {
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