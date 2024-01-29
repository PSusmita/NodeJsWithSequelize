const express=require("express");
const router=express.Router();
const URLS=require("./urls");

module.exports=()=>{
    router.use(URLS?.USER,require("./user/index")());
    return router;
}