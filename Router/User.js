const Route = require("express").Router();
const Controller = require("../controller/User-controller");
const Auth_Controller = require("../controller/Auth");

//Registration
Route.post("/register",Auth_Controller.Registration);
//Login
Route.post("/login",Auth_Controller.Login)

//User-crud;
Route.get("/get-All-Users", Controller.getallData);
Route.get("/users-getBy-Id/:id", Controller.findByID);
Route.put("/updata-Users/:_id", Controller.UpdatData);
Route.delete("/delete-Users/:_id", Controller.deleteData);


module.exports = Route;
