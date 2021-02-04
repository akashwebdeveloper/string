const express = require('express')
const router = express.Router()
const Post =  require('../models/post')


router.post('/post',(req,res)=>{
    const { string } = req.body

    const post = new Post({
        string: string || ""
    })

    // New User Save to database
    post.save().then(post => {
        // login
        return res.status(200).json({
            success: 1,
            status: 200,
            message: "verfied data save in to database",
            post: post,
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



router.get('/get',(req,res)=>{
    Post.find({ }, (err, posts) => {
        if (err) {
            return res.status(502).send({
                success: false,
                status: 502,
                message: "err from database"
            })
        }

        if (!posts[0]) {
            return res.status(202).send({
                success: false,
                status: 202,
                message: "user doesn't exist"
            })
        }
        return res.status(200).send({
            success: true,
            status: 200,
            message: "user data Available",
            user: posts
        })
    })
})


module.exports = router