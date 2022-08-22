const express = require('express')
const app = express()
const fs = require('fs');
const webpack = require('webpack');
const config = require('./webpack.config')
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const recommend = require('./src/BuildBox/Recommend/ClassRecommend')
const userRoutes = require('./src/routes/routeUser')
const testRoutes = require('./src/routes/test');
const typeBoxRoutes = require('./src/routes/routeTypeBox')
const domainRoutes = require('./src/routes/routeDomain')
const updateDatabaseRoutes = require('./src/routes/routeUpdateDatabase')
const algorithmRoutes = require('./src/routes/routeAlgorithm')
const recommendRoutes = require('./src/routes/routeRecommend')

// ENV
require('dotenv').config();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

//Static file
app.use(express.static(path.join(__dirname, 'src', 'public')))

//Router user
app.use(userRoutes)

//Router Test
app.use(testRoutes)

//Router TypeBox
app.use(typeBoxRoutes)

//Router Domain
app.use(domainRoutes)

//Router Algorithms
app.use(algorithmRoutes)

//Router Recommned
app.use(recommendRoutes)


//config Database, router test
app.use(updateDatabaseRoutes)


//Page not found
app.use((req, res) => {
  res.status(404).send('<h1>Page not found!!</h1>')
})

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


