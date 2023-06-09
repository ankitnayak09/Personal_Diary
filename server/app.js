//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var crypto = require("crypto");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.use(express.json());

mongoose.connect(
	"mongodb+srv://ankitnayak882:ankitnayak882@cluster0.5cazvfq.mongodb.net/PersonalDiary",
	{ useNewUrlParser: true },
	{ useUnifiedTopology: true }
);

// User Model
const User = require("./models/User");

// Post Model
const Post = require("./models/Post");

var getHash = (pass) => {
	var hmac = crypto.createHmac("sha512", "signature");
	// passing the data to be hashed
	data = hmac.update(pass);
	// Creating the hmac in the required format
	gen_hmac = data.digest("hex");
	// console.log("hmac : " + gen_hmac);
	return gen_hmac;
};

app.get("/", (req, res) => res.send("Backed is Running Smoothly"));

//the home route
app.post("/", function (req, res) {
	const id = req.body.userId;
	Post.find({ author: id }, function (err, posts) {
		posts.reverse();
		res.status(200).json({ posts });
	});
});

//posting title and content in /compose page
app.post("/compose", function (req, res) {
	const post = new Post({
		title: req.body.postTitle,
		content: req.body.postBody,
		author: req.body.userId,
		writtenOn: req.body.date,
	});
	// composed blog gets saved and the user is redirected to "/" route
	post.save(function (err) {
		if (!err) {
			res.status(200).json({ post });
		}
	});
});

//clicking on readmore on the home screen bring up the post with the id on the url
app.get("/posts/:postId", function (req, res) {
	const requestedPostId = req.params.postId;

	Post.findOne({ _id: requestedPostId }, function (err, post) {
		res.status(200).json({
			title: post.title,
			content: post.content,
			writtenOn: post.writtenOn,
		});
	});
});

app.post("/signup", async function (req, res) {
	// var name = req.body.name;
	var email = req.body?.email;
	var pass = req.body?.password;
	var password = getHash(pass);

	const newUser = User({
		email,
		password,
	});

	try {
		await newUser.save();
		return res.status(200).json({ newUser, message: true });
	} catch (err) {
		return res
			.status(400)
			.json({ message: false, error: "User Already Exist" });
	}
});

app.post("/login", function (req, res) {
	var email = req.body?.email;
	var pass = req.body?.password;
	var password = getHash(pass);

	User.findOne({ email }, function (err, user) {
		if (!err) {
			// console.log(user);
			if (user?.password == password) {
				return res.status(200).json({ user, message: true });
			} else {
				return res.status(401).json({
					message: false,
					error: "Wrong Password",
				});
			}
		} else {
			return res.status(200).json({ message: false, error: err });
		}
	});
});

// Search Functionality
app.get("/search/:query", (req, res) => {
	const { query } = req.params;
	var regex = new RegExp(query, "i");
	Post.find({ $or: [{ title: regex }, { content: regex }] }).then((posts) => {
		res.status(200).json({ posts });
	});
});

let port = process.env.PORT;
if (port == null || port == "") {
	port = 3000;
}

app.listen(port, function () {
	console.log("Server has started in port 3000 successfully");
});
