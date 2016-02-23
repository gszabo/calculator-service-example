'use strict';

let express = require('express');
let app = express();

let Calculator = require('./lib/calculator');

app.get('/add', function(req, res) {
  let calculator = new Calculator();
  let a = parseInt(req.query.a, 10);
  let b = parseInt(req.query.b, 10);
  let result = calculator.add(a, b);
  res.send(result.toString());
});

app.listen(process.env.PORT || 3000, function() {
  console.log('App listening');
});
