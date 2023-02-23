const express = require("express");
const bodyParser = require("body-parser");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 5000;

//mongodb connection import
require("./db/mongoConn");
require("./db/sqlConn");

//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//importing routes
const provider_routes = require("./routes/providerRoutes");
const worker_routes = require("./routes/workerRoutes");

//Routes
app.use(provider_routes);
app.use(worker_routes);

app.listen(port, function () {
  console.log(`Server is up at ${port}`);
});
