// Use Express
var express = require("express");
// Use body-parser
var bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient

// Create new instance of the express server
var app = express();

// Define the JSON parser as a default way 
// to consume and produce data through the 
// exposed APIs
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.get("/api/status", function (req, res) {
    res.status(200).json({ status: "UP" });
});

const connectionString = "mongodb+srv://e-kaly:e-kalyMEAN@cluster0.wa4xc.mongodb.net";

MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
			console.log('Connected to Database')
			const db = client.db('sample_analytics')
			app.get("/api/listingsAndReviews", function (req, res) {
				db.collection('customers').find().toArray()
					.then(rsListingsAndReviews => {
						console.log(rsListingsAndReviews)
						res.status(200).json({ listingsReviews: rsListingsAndReviews })
					})
					.catch(/* ... */)
			});

			const port = process.env.PORT || 8888;

			if(process.env.NODE_ENV === "production") {

				var distDir = __dirname + "/dist/e-kaly";
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


// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.

