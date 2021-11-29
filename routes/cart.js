const express = require('express')
const controller = require('../controllers/cart')
const passport = require('passport')
const router = express.Router()

// localhost:5000/api/auth/login
router.get('/', passport.authenticate('jwt',{session: false}), controller.getAll)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router