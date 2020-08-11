var express = require("express");
var cors = require("cors");
var path = require("path");

var app = express();

app.use(cors());

app.use('/static', express.static(path.join(__dirname, 'build/static')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'build/index.html')));


app.listen(8080, () => {
    console.log("Frontend Running on port 8080");
});
