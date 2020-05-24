/* === Dependencies === */
const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const routes = require('./routes/index');
/* === Set the PORT to work with deployment environment === */
const PORT = process.env.PORT || 3001;
/* === Call Express as app === */
const app = express();

/* === Middleware === */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/* Serve up static assets */
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, './client/build')));
}

/* === Routing === */
app.use(routes);

/* === Express 404 error handler === */
app.use(function (req, res, next) {
  var err = new Error('404 in Server.js, route Not Found');
  err.status = 404;
  next(err);
});
/* === Mongoose Connection === */
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/TipTopNails', { useNewUrlParser: true, useUnifiedTopology: true });

/* === Error Handling === */

/* Development error handler will print stacktrace */
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

/* Production error handler no stacktraces leaked to user */
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

/* === Telling Express to Listen === */
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});