let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let db = require('./model/db.js');
let routes = require('./controller/route.js');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/assets', express.static(__dirname + '/public'));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

db.connect(db.basilio_mode,(err)=>{
  if(err) {
    console.error('Unable to Connect MYSQL' + err);
    process.exit(1);
  }

  else {
    let server = app.listen(3000, ()=>{
      console.log('[SERVER] Listening in port:' +server.address().port);
      
    }).on('error', (err)=>{
      console.log('[SERVER] Network related error: Port must be in use'+ err);
      process.exit(1);
    });
  }
});
module.exports = app;
