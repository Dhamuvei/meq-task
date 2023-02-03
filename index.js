const express = require("express");
const router = require("./Router/index")
const mongoose = require("mongoose");
const App = express();
App.use(express.json());
require("dotenv").config();

//Port
const Port = process.env.Port;

// MongoDb Connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DBURL, {useNewUrlParser: true},console.log("MongoDb Get Connected Successfully"));

//Router

App.use("/",router.MeqlUsers);
// App.use("/Auth",router.Auth);

App.listen(Port,console.log(`Port successfully runing in port ${Port}`));

