const express = require('express')
const router = express.Router()
const Scoreboard = require('../models/scoreboard')


router.post('/scoreboard', (req, res) => {
    const { _token, mypoint, id, email, TotalPlayer, Hand, highscore, balance} = req.body

    const scoreboard = new Scoreboard({
        _token: _token || "",
        mypoint: mypoint || "",
        id: id || "",
        email: email || "",
        TotalPlayer: TotalPlayer || "",
        Hand: Hand || "",
        highscore: highscore || "",
        balance: balance || "",
    })

    // New User Save to database
    scoreboard.save().then(post => {
        // login
        let timerId = setInterval(() => {

            Scoreboard.find({ id: post.id }, { mypoint: 1, id: 1, email: 1, TotalPlayer: 1, Hand:1, highscore:1, balance:1, _id: 0 }, (err, values) => {
                if (err) {
                    return res.status(502).json({
                        success: false,
                        status: 502,
                        message: "err from database"
                    })
                }

                const length = values.length;
                if (length >= 2) {
                    clearInterval(timerId)
                    return res.status(200).end(JSON.stringify({data: values}))
                }
            })

        }, 2000)

    }).catch(err => {
        return res.status(503).json({
            success: 0,
            status: 503,
            message: "err from database",
            err
        })
    })
})




router.post('/clearscoreboard', (req, res) => {
    const { _token, id} = req.body

    Scoreboard.deleteOne({$and: [{id: id}, {_token: _token}]},(err)=>{
        if (err) {
            return res.status(503).json({
                success: 0,
                status: 503,
                message: "err from database",
                err
            })
        }

        return res.status(200).json({
            success: 1,
            message: "deleted successfully",
        })
    })
})


module.exports = router