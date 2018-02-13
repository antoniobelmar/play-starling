const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(res, req) {
  req.render('hello');
});

app.listen(5000, function(){
    console.log('server running on port 5000');
  });

