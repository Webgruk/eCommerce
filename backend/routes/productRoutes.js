const router = require('express').Router()

const { getProductById, getAllProduct } = require('../handlers/productHandlers')
// get all products form db
router.get('/', getAllProduct)

//get product by id
router.get('/:id', getProductById)

module.exports = router
