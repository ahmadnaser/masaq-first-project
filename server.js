const config = require("./config");
const express = require("express");
const app = express();

require("./config/express")(app);
//require('./config/mongodb')(app)
require("./config/mongoose")(app);

const router = require("./routes");

app.use(router);

app.listen(config.development.port, () =>
  console.log(`Express is running ${config.development.port}`)
);
