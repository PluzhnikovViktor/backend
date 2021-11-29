const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productsSchema = new Schema({
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
	description: {
		type: String,
		required: true
	},
})

module.exports = mongoose.model('products', productsSchema)