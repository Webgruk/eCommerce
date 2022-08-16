require('dotenv').config()

const productsData = require('./data/product')

const connectDB = require('./config/db')

const Product = require('./models/product')

connectDB()

const importData = () => {
  try {
    Product.deleteMany({})

    Product.find((err, product) => {
      if (err) return console.error(err)
      if (product.length) return

      Product.insertMany(productsData)

      console.log(product)
    })
  } catch (err) {
    console.log(err)
  }
}

importData()
