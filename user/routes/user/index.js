const express=require("express");
const router=express.Router();
const urls=require("./urls");

module.exports=()=>{
    router.use(urls?.AUTH,require("./auth/index")());
    return router;
}