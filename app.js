const express = require('express')
const app = express()
const fs = require('fs');
const webpack = require('webpack');
const config = require('./webpack.config')
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const recommend = require('./src/BuildBox/Recommend/ClassRecommend')
const userRoutes = require('./src/routes/user')
const testRoutes = require('./src/routes/test');
const configDatabase = require('./src/config/configDatabase');
require('dotenv').config();
const sequelize = require('./src/util/connectDB')


//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use(configDatabase)

//Static file
app.use(express.static(path.join(__dirname, 'src', 'public')))

//Router user
app.use('/user', userRoutes)

// //Router Test
app.use('/test', testRoutes)

//Page not found
app.use((req, res) => {
  res.status(404).send('<h1>Page not found!!</h1>')
})

sequelize
  .sync()
  .then(result => {
    // console.log(result)
  })
  .catch(error => {
    console.log(error)
  })

let port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


