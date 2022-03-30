import express from "express";
import path from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";
import MongoDb from "mongodb";
import {connectionString, name} from "./Server side/db.js";

const MongoClient = MongoDb.MongoClient

// Create new instance of the express server
var app = express();

// Define the JSON parser as a default way 
// to consume and produce data through the 
// exposed APIs
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get("/api/status", function (req, res) {
	console.log("yes")
    res.status(200).json({ status: "UP" });
});

MongoClient.connect(connectionString, { useUnifiedTopology: true })
	.then(client => {
		console.log('Connected to Database')
		const db = client.db(name)
		app.get("/api/listingsAndReviews", function (req, res) {
			db.collection('customers').find().toArray()
				.then(rsListingsAndReviews => {
					console.log(rsListingsAndReviews[0])
					res.status(200).json({ listingsReviews: rsListingsAndReviews })
				})
				.catch(/* ... */)
		})
		
		
	}).then(() => {
		const port = process.env.PORT || 8888;
		if(process.env.NODE_ENV === "production") {
			const filename = fileURLToPath(import.meta.url);
			const __dirname = path.dirname(filename);

			const distDir = __dirname + "/dist/e-kaly";
			app.use(express.static(distDir));
			
			app.get("*", function(req, res) {
				res.sendFile(path.join(distDir, "index.html"))
			})
		}
		// Init the server
		var server = app.listen(port, function () {
		var port = server.address().port;
			console.log("App now running on port", port);
		});
	})
	.catch(console.error)

