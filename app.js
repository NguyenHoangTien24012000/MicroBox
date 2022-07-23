const express = require('express')
const app = express()
const port = 8080
const fs = require('fs');
const webpack = require('webpack');
const config = require('./webpack.config')
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

app.post('/send-data', (req, res, next) => {
  // var { layout, css } = req.body;

  // var myPromise1 = new Promise((resolve, reject) => {
  //   fs.writeFile('./css.css', css, (err) => {
  //     if (err) {
  //       console.log("err", err)
  //     } else {
  //       resolve();
  //     }
  //   })
  // })

  // var myPromise2 = new Promise((resolve, reject) => {
  //   fs.writeFile('./html.html', layout, (err) => {
  //     if (err) {
  //       console.log("err", err)
  //     } else {
  //       resolve();
  //     }
  //   })
  // })

  // Promise.all([myPromise1, myPromise2]).then(() => {
  //   const fileBuild = `${Date.now()}_recommend.js`

  //   config.entry = './build.js';
  //   config.output = {
  //     path: path.resolve(__dirname, 'dist'),
  //     filename: fileBuild
  //   }

  //   webpack([
  //     config
  //   ], (err, stats) => { // [Stats Object](#stats-object)
  //     process.stdout.write(stats.toString() + '\n');
  //   })
  // });
  const fileBuild = `${Date.now()}_recommend.js`
  config.entry = './build.js';
  config.output = {
    path: path.resolve(__dirname, 'dist'),
    filename: fileBuild
  }

  webpack([
    config
  ], (err, stats) => { // [Stats Object](#stats-object)
    process.stdout.write(stats.toString() + '\n');
  })

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})