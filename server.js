/**
 * Module dependencies
 */
var express = require('express'),
  bodyParser = require('body-parser'),
  swig = require('swig'),
  routes = require('./routes');
// var errorHandler = require('errorhandler');

var app = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.engine('html', swig.renderFile);
// view engine setup
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var env = process.env.NODE_ENV || 'development';

// development only
if (env === 'development') {
  // app.use(errorHandler());

  // use Express's caching instead
  app.set('view cache', false);
  // To disable Swig's cache, do the following:
  swig.setDefaults({ cache: false });
  // NOTE: You should always cache templates in a production environment.
  // Don't leave both of these to `false` in production!
}
// production only
if (env === 'production') {
  // TODO
}

/**
 * Routes
 */
app.get('/', routes.index);

app.listen(3000, function() {
  console.log('Express serving listening on port 3000');
});
