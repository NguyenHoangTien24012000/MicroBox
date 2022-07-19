const express = require('express')
const app = express()
const port = 3000
const Animal = require('./src/test/ClassParent')
const webpack = require('webpack');
const fs = require('fs');


app.get('/', (req, res) => {
  const data = req.body
  console.log("data", req)
  res.send("Alo")
})


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/post-test', (req, res) => {

  const Meo = new Animal("meo", 1, "yellow");

  // console.log(Meo)
  // res.sendStatus(200);
  webpack([
    { entry: Meo, output: { filename: 'bundle1.js' } },
    { entry: './index2.js', output: { filename: 'bundle2.js' } }
  ], (err, stats) => { // [Stats Object](#stats-object)
    process.stdout.write(stats.toString() + '\n');
  })



});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})