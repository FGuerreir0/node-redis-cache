const express = require("express");
const axios = require("axios");
const redis = require("redis");
const app = express();

app.listen(3000, () => {
    console.log("App has started...");
});