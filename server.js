// Use Express
var express = require("express");
// Use body-parser
var bodyParser = require("body-parser");

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

if(process.env.NODE_ENV === "production") {

    var distDir = __dirname + "/dist/e-kaly";
    app.use(express.static(distDir));

    app.get("*", function(req, res) {
        res.sendFile(path.join(distDir, "index.html"))
    })
}

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.

const port = process.env.PORT || 8888;

// Init the server
var server = app.listen(port, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

