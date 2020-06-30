const express = require("express");
const configure = require("../configure.js");
const app = express();
const user = require("../API/components/user/network");
// Rutas
app.use("/api/user", user);

app.listen(configure.api.port, () => {
  console.log(`API intialized in port ${configure.api.port} `);
});
