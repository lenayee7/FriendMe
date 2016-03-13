var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/friendme');
console.log('connected');
var User = require('../models/user');

User.remove({}, function(err) {
	if(err) {
		console.log("ERROR ", err);
	}
});

var userList = [

				{
					first_name: "Luca",
					last_name: "Spezzano",
					email: "luca@93.com",
					photo_url: "http://blogs.oregonstate.edu/jenniferblanger/files/2015/04/Elia-Locardi-Travel-Photography-Roman-Radiance-Rome-Italy-1440-WM-DM-60q.jpg",
					passwordDigest: "password",
				},
				{
					first_name: "Ivan",
					last_name: "Zich",
					email: "ivan@.com",
					photo_url: "http://i2.cdn.turner.com/cnnnext/dam/assets/140324130329-croatia---veli-rat-horizontal-large-gallery.jpg",
					passwordDigest: "password",
				},
				{
					first_name: "Caleb",
					last_name: "Chen",
					email: "caleb@.com",
					photo_url: "https://www.inqbation.com/wp-content/uploads/2012/06/6911733-san-francisco-night.jpg",
					passwordDigest: "password",
				}

];

User.create(userList, function(err, docs) {
	if(err) {
		console.log("ERROR ", err);
	} else {
		console.log("Created: ", docs);
		mongoose.connection.close();
	}
	
});