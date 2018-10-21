const router = require('express').Router(),
      { signIn, signUp } = require('../controllers/user')


router
    .post('/register', signUp)
    .post('/login', signIn)




module.exports = router