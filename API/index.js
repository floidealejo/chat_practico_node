const express = require("express");
var bodyParser = require("body-parser");
const configure = require("../configure.js");
const app = express();
const user = require("../API/components/user/network");
app.use(bodyParser.json());
// Rutas
app.use("/api/user", user);

app;
app.listen(configure.api.port, () => {
  console.log(`API intialized in port ${configure.api.port} `);
});
