const dotenv = require("dotenv");
dotenv.config({ path: './.env' });
const express = require("express");
const app = express();

const cookieParser = require('cookie-parser');





app.use(express.json());
app.use(cookieParser());

module.exports = app;