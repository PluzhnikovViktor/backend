const Products = require('../models/Products')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function (req, res) {
	try {
		const product = await Products.find({

		})
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.getById = async function (req, res) {
	try {
		const product = await Products.find({

		})
	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.update =  function (req, res) {
	try {

	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.getAll =  function (req, res) {
	try {

	} catch (e) {
		errorHandler(res, e)
	}
}

module.exports.getAll =  function (req, res) {
	try {

	} catch (e) {
		errorHandler(res, e)
	}
}