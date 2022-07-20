const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const webpack = require('webpack');
const config = require('./webpack.config')



const BoxRecomend = require('./parent')
app.get('/', (req, res) => {
  const data = req.body
  console.log("data", req)
  res.send("Alo")
})



const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/post-test', (req, res) => {

  const compiler = webpack(config);

  compiler.run((err, stats) => {
    console.log("Success!");

    compiler.close((closeErr) => {
      if (closeErr) {
        console.log(closeErr);
      }
    });
  });
  // var { html, css } = req.body;

  // var test = `const Recommend = require('./parent')
  // var html = '${html}'
  // var css = '${css}'
  // const box = new Recommend(html, css);
  // box.render()`

  // fs.writeFileSync('./build.js', test)

  // const a = fs.readFileSync('./build.js', "utf-8");
  // console.log("testse", a)


  res.sendStatus(200);
});


app.post("/build", (req, res) => {

  webpack([
    { entry: './build.js', output: { filename: 'bundle1.js' } },

  ], (err, stats) => { // [Stats Object](#stats-object)
    process.stdout.write(stats.toString() + '\n');
  })
  res.end()
})

// const compiler = webpack(config);
// compiler.run((err, stats) => {
//   console.log("Success!");

//   compiler.close((closeErr) => {
//     if (closeErr) {
//       console.log(closeErr);
//     }
//   });
// });



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})