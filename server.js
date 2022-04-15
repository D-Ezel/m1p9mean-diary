import express from "express";
import path from "path";
import {fileURLToPath} from "url";
import bodyParser from "body-parser";
import { logError, sendError  } from "./Server side/middlewares/errors-handlers.js"
import cors from "cors";
import session from "express-session";

import mongoose from "mongoose";
import connectionString from "./Server side/db.js";

import ServerRoutes from "./Server side/server.routes.js";

import MongoStore from "connect-mongo";

// Create new instance of the express server
const app = express();

// Define the JSON parser as a default way 
// to consume and produce data through the 
// exposed APIs
mongoose.connect(connectionString, { 
	useNewUrlParser: true,
	useUnifiedTopology: true 
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
	console.log("Connected successfully");
});

app.use(cors({
	credentials: true
}));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header("Access-Control-Allow-Origin", "http://localhost:4200");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-   Type, Accept, Authorization");
	next();
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(session({
	secret:"mysupersecret",
	resave:false,
	saveUninitialized: false,
	store: MongoStore.create({ mongoUrl: connectionString }),
	cookie: { maxAge: 180 * 60 * 1000 }
}))
	
app.use(function(req,res,next) {
	res.locals.session = req.session;
	next();
})



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

