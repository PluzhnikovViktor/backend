const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	img: {
		type: String,
		default: ''
	},
	price: {
		type: String,
		required: true
	},
	total: {
		type: Number,
		required: true
	},
})

module.exports = mongoose.model('cart', cartSchema)