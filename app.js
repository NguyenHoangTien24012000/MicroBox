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
  var { layout, css } = req.body;

  // console.log("test", layout, css)

  var test = `const Recommend = require('./parent')
  var html = '${layout}'
  var css = '${css}'
  const box = new Recommend(html, css);
  box.render()`

  try {
    fs.writeFileSync('./css.txt', css)
  } catch (err) {
    console.error("err", err);
  }

  try {
    fs.writeFileSync('./html.txt', layout)
  } catch (err) {
    console.error("err", err);
  }

  const fileBuild = `${Date.now()}_recommend.js`

  config.entry = './build.js';
  config.output = {
    path: path.resolve(__dirname, 'dist'),
    filename: fileBuild
  }

    console.log("config", config)

  webpack([
    config
  ], (err, stats) => { // [Stats Object](#stats-object)
    process.stdout.write(stats.toString() + '\n');
  })



});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})