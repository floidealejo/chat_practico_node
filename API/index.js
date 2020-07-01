const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const configure = require("../configure.js");
const app = express();
const user = require("../API/components/user/network");
app.use(bodyParser.json());
const swaggerDoc = require("../swagger.json");
// Rutas
app.use("/api/user", user);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(configure.api.port, () => {
  console.log(`API intialized in port ${configure.api.port} `);
});
