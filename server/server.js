const path = require('path');
const express = require('express');
// __dirname = current directory
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
  console.log('server run properly on port 3000');
})
