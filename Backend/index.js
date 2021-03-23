const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const taskRoutes = require("./View/taskRoute")

const app = express();

const port = 8000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
mongoose
  .connect( process.env.DATABASE , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  }).catch(err => {console.log(err)} )

  app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api",taskRoutes)

app.get("/" , (req,res) => {
    res.send("Workinggg")
} )




app.listen( port , () => {  console.log(`Port started running on ${port}`)});