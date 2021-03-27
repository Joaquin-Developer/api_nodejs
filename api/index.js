const express = require("express");
const bodyParser = require("body-parser");
const config = require("../config");
const user = require("./components/user/network");
const app = express();

// settings:
app.set("port", config.api.port);
app.use(bodyParser.json());

// routes:
app.use("/api/user", user);

app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});
