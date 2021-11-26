const express = require('express')
const controller = require('../controllers/products')
const router = express.Router()

// localhost:5000/api/auth/login
router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)


module.exports = router