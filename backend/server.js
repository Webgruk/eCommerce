require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
connectDB()

const app = express()

app.use(express.json())

app.use('/api/products', productRoutes)
const PORT = process.env.PORT || 6000

app.listen(PORT, () => {
  console.log('server connected')
})

console.log(`${app.get('env')}`)
