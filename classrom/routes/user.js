const express= require("express");
const router=express.Router();

//Index-users
router.get("/users",(req,res) =>{
    res.send("Get for users");
});
//Show-users
router.get("/user/:id",(req,res) =>{
    res.send("Get for user id");
});
//Post -users
router.post("/users",(req,res) =>{
    res.send("POST for users");
});
//DELETE -users
router.delete("/users/:id",(req,res) => {
    res.send("DELETE for user id");
});
module.exports=router;

