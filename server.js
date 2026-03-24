const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;
// require("./schedular1");
// require("./schedular2");
require("./schedular3");

const app = express();
app.use(express.json());

app.listen(port, () => {
    console.log("Server running at port : " , port);
});