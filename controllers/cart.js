const Cart = require('../models/Cart')

const errorHandler = require('../utils/errorHandler')


module.exports.getAll = async function (req, res) {
	try {
		const cart = await Cart.find({
			user: req.user.id
		})
		res.status(200).json(cart)
	} catch (e) {
		errorHandler(res, e)
	}
	// res.json({message: 'Categ'})
}

module.exports.getById = async function (req, res) {
	try {
		const cart = await Cart.findById(req.params.id)
		res.status(200).json(cart)
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.update = async function (req, res) {
	try {
		await Cart.remove({_id: req.params.id})
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.delete = async function (req, res) {
	try {
		await Cart.remove({_id: req.params.id})
		// const cart = await Cart.find({
		// 	user: req.user.id
		// })
		// res.status(200).json(cart)
	} catch (e) {
		errorHandler(res, e)
	}
}