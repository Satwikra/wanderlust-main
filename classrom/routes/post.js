const express=require("express");
const router=express.Router();

//Index
router.get("/posts",(req,res)=>{
    res.send("GET FOR posts");
});
//show
router.get("/posts/:id",(req,res)=>{
    res.send("GET FOR posts id");
});
//POST
router.get("/posts",(req,res)=>{
    res.send("GET FOR posts");
});
//delete
router.get("/posts/:id",(req,res)=>{
    res.send("GET FOR posts id");
});
module.exports=router;
