import express from "express";
import path from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";
import { logError, sendError  } from "./Server side/middlewares/errors-handlers.js"
import cors from "cors";

import mongoose from "mongoose";
import connectionString from "./Server side/db.js";

import ServerRoutes from "./Server side/server.routes.js";

// Create new instance of the express server
const app = express();

// Define the JSON parser as a default way 
// to consume and produce data through the 
// exposed APIs
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

mongoose.connect(connectionString, { 
	useNewUrlParser: true,
	useUnifiedTopology: true 
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
	console.log("Connected successfully");
});
	
app.use("/api",ServerRoutes);

app.use(logError);
app.use(sendError);

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

