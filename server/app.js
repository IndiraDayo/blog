const express = require('express'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    bodyParser= require('body-parser'),
    port = process.env.PORT || 3000,
    axios = require('axios'),
    app = express()

const userRouter = require('./routes/user'),
      articleRouter = require('./routes/article')

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true});

app
    .use(express.json())
    .use(express.urlencoded({ extended: false }))

    .use(cors())

    .use('/', userRouter)
    .use('/article', articleRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})