const express = require('express')
const router = express.Router()
const loginLimiter =require('../middleware/loginLimiter')
const  authController =require('../controller/authController')



router.route('/')
      .post(loginLimiter, authController.login)

router.route('/refresh')
      .get(authController.refresh)

router.route('/logout')
     .post(authController.logout)
module.exports = router;