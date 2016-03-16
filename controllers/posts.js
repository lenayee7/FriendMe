var Post = require('../models/post');

var postsController = {

 	apiPosts: function(req, res) {
 	  Post.find({}, function(err, posts) {
      res.status(200).send(JSON.stringify(posts));
    });
 	},

	index: function(req, res) {
    Post.find({}, function(err, posts) {
     res.render('./partials/allposts', {posts: posts});
    });
  },

  new: function(req,res) {
  	res.render('./partials/newpost')
  },

  create: function(req, res) {
  	var post = req.body;
  	Post.create(post, function(err, post) {
	  	err ?
	  		res.status(500).send() :
	  		res.status(201).send(JSON.stringify(post));
	  });
 	},

 	show: function(req, res) {
  	var id = req.params.id;
  	Post.findById(id, function(err, post) {
      // console.log('POST ****', post)
  		if(err) returnError(err); 
       res.render('./partials/postshow', {postJS: JSON.stringify(post), post: post});
  		 // res.status(200).send(JSON.stringify(post));
  	});
  },

  // edit: function(req,res) {
  // 	res.render('./partials/editpost');
  // },

 	update: function(req, res) {
		var id = req.params.id;
			// console.log('UPDATE *******', id)
	  Post.findById(id, function(err, post){
	  	(console.log("POST", post));
	  if (err) returnError(err);
	  if (req.body.interests) post.interests = req.body.interests;
    if (req.body.email) post.email = req.body.email;
	  if (req.body.description) post.description = req.body.description;
    if (req.body.photoUrl) post.photoUrl = req.body.photoUrl;
	  // console.log("REQ. BODY" , req);
	  post.save(function(err, savedPost) {
	    console.log("saved post***", savedPost);
      console.log("error", err)
	    err ? 
	    	res.status(200) :
        // res.render('./partials/postshow', {postJS: JSON.stringify(savedPost), post: savedPost});
	    	res.status(200).send(JSON.stringify(savedPost));
	  });
	});
},

   destroy: function(req, res) {
    console.log("HELOO***", req.params.id)

    Post.remove({_id: req.params.id}, function(err, post) {
      console.log('REMOVED', post);
      err ? 
        res.status(500).send() :
        res.status(204).send(JSON.stringify(post));
      });
  }

}

	function returnError (err) {
  	return console.log(err);
	}


module.exports = postsController;