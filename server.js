const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.get('/', function(res, req) {
  req.render('hello');
});

app.listen(PORT, function(){
  console.log('server running on port 5000');
});

