require('dotenv').config();
const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const port = process.env.PORT




// Database connection
const connectDB = require('./config/db');
connectDB();



// Body parser middleware
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.use(require('./routes/post'))
app.use('/api', require('./routes/scoreboard'))

app.listen(port, ()=> console.log(`Connected to port ${port}`))
