var express 		= require('express'),
	app 			= express(),
	mongoose 		= require('mongoose'),
	bodyParser 		= require('body-parser'),
	methodOverride 	= require('method-override'),
	path 			= require('path'),
	logger 			= require('morgan');
	expressSession 	= require('express-session');
	cookieParser   	= require("cookie-parser");
	passport       	= require('passport');
	// usersController = require('../controllers/users');

var	router = express.Router();

mongoose.connect('mongodb://localhost/friendme');

//index page
router.get('/', function(req, res) {
	res.render("./partials/welcome");
});










module.exports = router;