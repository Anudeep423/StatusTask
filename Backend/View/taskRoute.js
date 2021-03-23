const express = require("express");

const {SaveTask} = require("../Controller/taskCont")

const Router = express.Router();

Router.post("/task",SaveTask);

module.exports = Router;