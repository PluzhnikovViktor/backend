const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const authRoutes = require('./routes/auth')
const cartRoutes = require('./routes/cart')
const productsRoutes = require('./routes/products')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/products', productsRoutes)


module.exports = app